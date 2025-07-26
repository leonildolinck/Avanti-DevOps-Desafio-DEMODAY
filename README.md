# Projeto - DEMODAY - Apresentação do IQfome

![Banner](./images/banner.png)

<p align="center">
	<img src="https://img.shields.io/github/license/leonildolinck/Avanti-DevOps-Desafio-DEMODAY?style=default&logo=opensourceinitiative&logoColor=white&color=14083c" alt="license">
	<img src="https://img.shields.io/github/last-commit/leonildolinck/Avanti-DevOps-Desafio-DEMODAY?style=default&logo=git&logoColor=white&color=14083c" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leonildolinck/Avanti-DevOps-Desafio-DEMODAY?style=default&color=14083c" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leonildolinck/Avanti-DevOps-Desafio-DEMODAY?style=default&color=14083c" alt="repo-language-count">
</p>

Este repositório contém a aplicação api-refeicoes-aleatorias, desenvolvida em Python, com FastAPI elaborada por nós junto com uma pipeline de CI/CD automatizada usando o GitHub Actions. O objetivo é garantir entregas consistentes, testadas e com provisionamento de infraestrutura automática usando Terraform na plataforma Koyeb.

## Tecnologias Utilizadas
- **Python 3**

- **Docker**

- **Terraform**

- **GitHub Actions**

- **Koyeb**

- **Docker Hub**


## Sumário

---

## Pré-requisitos

- [Docker](https://docs.docker.com/engine/install/)
- [Terraform](https://www.terraform.io/)
- Conta no [GitHub](https://github.com/)
- Conta no [Terraform](https://terraform.io/)
- Conta no [Koyeb](https://www.koyeb.com/)
- Conta no [Docker Hub](https://hub.docker.com/)

---

## Arquitetura do Projeto

### Front-End

```
[ Desenv. Local / GitHub ]
           │
           ▼
╔════════════════════════════════════════════════════════╗
║                    GitHub Actions CI/CD                ║
║--------------------------------------------------------║
║   1. Lint       → Node.js-ESLint                       ║
║   2. Test       → Node-js.Jest                         ║
║   3. Build      → Docker Buildx (multi-plataforma?)    ║
║   4. Push       → Docker Hub                           ║
║   5. Deploy     → Terraform Apply na Google Cloud      ║
║   6. Cleanup    → Terraform Destroy (manual)           ║
╚════════════════════════════════════════════════════════╝
           │
           ▼
╔══════════════════════╗      ╔══════════════════════════╗
║    Docker Hub        ║─────▶║  Run Cloud(Google Cloud) ║
║  leonildolinck/...   ║      ║   Container App Running  ║
╚══════════════════════╝      ╚══════════════════════════╝
                                      │
                                      ▼
                           https://<app>.a.run.app

```
### Back-End

```
[ Desenv. Local / GitHub ]
           │
           ▼
╔════════════════════════════════════════════════════════╗
║                    GitHub Actions CI/CD                ║
║--------------------------------------------------------║
║   1. Lint       → Ruff                                 ║
║   2. Test       → Pytest                               ║
║   3. Build      → Docker Buildx (x64)                  ║
║   4. Push       → Docker Hub                           ║
║   5. Deploy     → Terraform Apply na Koyeb             ║
║   6. Cleanup    → Terraform Destroy (manual)           ║
╚════════════════════════════════════════════════════════╝
           │
           ▼
╔══════════════════════╗      ╔══════════════════════════╗
║    Docker Hub        ║─────▶║   Koyeb (Infra Cloud)    ║
║  leonildolinck/...   ║      ║  Container App Running   ║
╚══════════════════════╝      ╚══════════════════════════╝
                                      │
                                      ▼
                           https://<app>.koyeb.app

```

## Estrutura do Projeto

```sh
└── Avanti-DevOps-Desafio-DEMODAY/
    ├── .github
    │   └── workflows
    │       ├── back-end.yaml
    │       ├── destroy-back-end.yaml
    │       ├── destroy-front-end.yaml
    │       └── front-end.yaml
    ├── LICENSE
    ├── README.md
    ├── back-end
    │   ├── CICD.trigger
    │   ├── Dockerfile
    │   ├── app
    │   │   ├── __init__.py
    │   │   ├── crud.py
    │   │   ├── database.py
    │   │   ├── main.py
    │   │   ├── models.py
    │   │   └── test_main.py
    │   ├── cardapio.db
    │   ├── infra
    │   │   ├── main.tf
    │   │   └── variables.tf
    │   └── requirements.txt
    ├── front-end
    │   ├── .gitignore
    │   ├── CICD.trigger
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── infra
    │   │   ├── main.tf
    │   │   └── variables.tf
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   └── vite.svg
    │   ├── src
    │   │   ├── App.jsx
    │   │   ├── App.test.jsx
    │   │   ├── assets
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   └── setupTests.js
    │   ├── tailwind.config.js
    │   └── vite.config.js
    ├── images
    │   └── banner.png
    └── screenshots
        └── 1.png
```             # Este arquivo
```


# 2. Workflow CI/CD

![Banner](./screenshots/infraestrutura-workflow.png)


## Conclusão

Neste projeto, exploramos as etapas de uma esteira CI/CD no GitHub Actions, desde o provisionamento de infraestrutura até a criação e hospedagem de contêineres Docker no Docker Hub.

Este trabalho tem um objetivo educacional, aplicando as práticas aprendidas no BootCamp Avanti DevOps do Instituto Atlântico Avanti.

Sinta-se a vontade para fazer qualquer comentário ou sugestão!

## Contato

- **Email:** leonildolinck@gmail.com  
- **Discord:** leonildo  
- **LinkedIn:** [linkedin.com/in/leonildolinck](https://linkedin.com/in/leonildolinck)