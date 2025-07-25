variable "app_name" {
  type    = string
  default = "api-cardapio-aleatorio"
}

variable "service_name" {
  type    = string
  default = "api-cardapio-aleatorio"
}

variable "instance_type" {
  type    = string
  default = "free"
}

variable "container_port" {
  type    = number
  default = 8080
}

variable "docker_image_name" {
  type    = string
  default = "leonildolinck/api-cardapio"
}

variable "docker_image_tag" {
  type    = string
  default = "latest"
}
  