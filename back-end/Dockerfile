# --- Estágio 1: Builder ---
FROM python:3.11-slim AS builder

# Cria o diretório de trabalho
WORKDIR /app

# Atualiza o pip
RUN pip install --upgrade pip

# Copia apenas o arquivo de dependências
COPY requirements.txt .

# Gera os wheels (pacotes pré-compilados)
RUN pip wheel --no-cache-dir --wheel-dir /app/wheels -r requirements.txt


# --- Estágio 2: Final ---
FROM python:3.11-slim

# Diretório da aplicação
WORKDIR /app

# Copia os wheels gerados do estágio anterior
COPY --from=builder /app/wheels /app/wheels

# Copia o código-fonte e o banco de dados
COPY app ./app
COPY cardapio.db ./cardapio.db

# Instala as dependências a partir dos wheels
RUN pip install --no-cache-dir /app/wheels/*

# Expõe a porta 8000
EXPOSE 8000

# Comando para iniciar a API FastAPI com Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
