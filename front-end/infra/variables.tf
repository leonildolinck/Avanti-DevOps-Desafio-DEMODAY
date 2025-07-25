variable "gcp_project_id" {
  type        = string
  default     = "gen-lang-client-0482677306"
  description = "ID do projeto GCP"
}

variable "gcp_region" {
  type        = string
  default     = "us-central1"
  description = "Região Cloud Run"
}

variable "service_name" {
  type    = string
  default = "frontend-nginx"
}

variable "container_port" {
  type    = number
  default = 80
}

variable "docker_image_name" {
  type    = string
  default = "leonildolinck/nginx-frontend"
}

variable "docker_image_tag" {
  type    = string
  default = "latest"
}