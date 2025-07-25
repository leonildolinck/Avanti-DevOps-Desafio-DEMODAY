terraform {
  backend "remote" {
    organization = "leonildo-devops"

    workspaces {
      name = "avanti-frontend"
    }
  }

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.gcp_project_id
  region  = var.gcp_region
}

resource "google_project_service" "cloud_run_api" {
  project = var.gcp_project_id
  service = "run.googleapis.com"

  disable_dependent_services = true
}

resource "google_cloud_run_service" "nginx-service" {
  name     = var.service_name
  location = var.gcp_region

  template {
    spec {
      containers {
        image = "${var.docker_image_name}:${var.docker_image_tag}"

        ports {
          container_port = var.container_port
        }

        resources {
          limits = {
            cpu    = "1000m"
            memory = "512Mi"
          }
        }
      }

      container_concurrency = 80
      timeout_seconds       = 300
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale"  = "0"
        "autoscaling.knative.dev/maxScale"  = "10"
        "run.googleapis.com/cpu-throttling" = "true"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  depends_on = [google_project_service.cloud_run_api]
}

resource "google_cloud_run_service_iam_member" "public" {
  service  = google_cloud_run_service.nginx-service.name
  location = google_cloud_run_service.nginx-service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "service_url" {
  value       = google_cloud_run_service.nginx-service.status[0].url
  description = "URL do deployyment do serviço Cloud Run"
}