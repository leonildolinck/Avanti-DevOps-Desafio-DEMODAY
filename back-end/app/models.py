from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class Entrada(Base):
    __tablename__ = "entradas"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    preco = Column(Float)
    imagem = Column(String)

class Prato(Base):
    __tablename__ = "pratos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    preco = Column(Float)
    imagem = Column(String)

class Sobremesa(Base):
    __tablename__ = "sobremesas"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    preco = Column(Float)
    imagem = Column(String)

class Bebida(Base):
    __tablename__ = "bebidas"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    preco = Column(Float)
    imagem = Column(String)
