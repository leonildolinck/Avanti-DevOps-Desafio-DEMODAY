
from sqlalchemy.orm import Session
import random

def get_item_by_id(db: Session, model, item_id: int):
    return db.query(model).filter(model.id == item_id).first()

def get_item_aleatorio(db: Session, model):
    items = db.query(model).all()
    return random.choice(items) if items else None
