from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, database, crud
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:5173",  
    "http://localhost:3000", 
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          
    allow_credentials=True,
    allow_methods=["*"],           
    allow_headers=["*"],             
)

models.Base.metadata.create_all(bind=database.engine)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_model(categoria: str):
    models_map = {
        "entrada": models.Entrada,
        "entradas": models.Entrada,
        "prato": models.Prato,
        "pratos": models.Prato,
        "sobremesa": models.Sobremesa,
        "sobremesas": models.Sobremesa,
        "bebida": models.Bebida,
        "bebidas": models.Bebida
    }
    if categoria not in models_map:
        raise HTTPException(status_code=400, detail="Categoria inválida")
    return models_map[categoria]

@app.get("/{categoria}/aleatorio")
def get_item_aleatorio(categoria: str, db: Session = Depends(get_db)):
    model = get_model(categoria)
    item = crud.get_item_aleatorio(db, model)
    if item:
        return item
    raise HTTPException(status_code=404, detail=f"Nenhum(a) {categoria} encontrado")

@app.get("/{categoria}/{item_id}")
def get_item(categoria: str, item_id: int, db: Session = Depends(get_db)):
    model = get_model(categoria)
    item = crud.get_item_by_id(db, model, item_id)
    if item:
        return item
    raise HTTPException(status_code=404, detail=f"{categoria.capitalize()} não encontrada")