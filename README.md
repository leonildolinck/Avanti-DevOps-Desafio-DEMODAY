# Projeto - DEMODAY - Apresentação do IQfome

![Banner](./images/banner.png)

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

```
[ Desenv. Local / GitHub ]
           │
           ▼
╔════════════════════════════════════════════════════════╗
║                    GitHub Actions CI/CD                ║
║--------------------------------------------------------║
║   1. Lint       → xxxxxxxxxxxxxx       ║
║   2. Test       → xxxxxxxxxxxxxxxx             ║
║   3. Build      → Docker Buildx (multi-plataforma?)     ║
║   4. Push       → Docker Hub                           ║
║   5. Deploy     → Terraform Apply na Koyeb             ║
║   6. Cleanup    → Terraform Destroy (manual)           ║
╚════════════════════════════════════════════════════════╝
           │
           ▼
╔══════════════════════╗      ╔══════════════════════════╗
║    Docker Hub        ║─────▶║     Koyeb (Infra Cloud)  ║
║  leonildolinck/...   ║      ║  Container App Running   ║
╚══════════════════════╝      ╚══════════════════════════╝
                                      │
                                      ▼
                           https://<app>.koyeb.app

```

## Estrutura do Projeto
```
.
├── Dockerfile                # Build da imagem da aplicação
├── main.go                   # Código-fonte principal
├── infra/                    # Arquivos Terraform para Koyeb
│   ├── main.tf
│   ├── variables.tf
│   └── ...
├── .github/
│   └── workflows/
│       └── main.yml          # Pipeline CI/CD
└── README.md                 # Este arquivo
```


# 1. Clonando a aplicação api-saudacoes-aleatorias


## Conclusão

Neste projeto, exploramos as etapas de uma esteira CI/CD no GitHub Actions, desde o provisionamento de infraestrutura até a criação e hospedagem de contêineres Docker no Docker Hub.

Este trabalho tem um objetivo educacional, aplicando as práticas aprendidas no BootCamp Avanti DevOps do Instituto Atlântico Avanti.

Sinta-se a vontade para fazer qualquer comentário ou sugestão!

## Contato

- **Email:** leonildolinck@gmail.com  
- **Discord:** leonildo  
- **LinkedIn:** [linkedin.com/in/leonildolinck](https://linkedin.com/in/leonildolinck)