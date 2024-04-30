# Comercializadora Azocar

Este proyecto es una aplicación web de una comercializadora de productos.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Endpoints de la API](#endpoints-de-la-api)
4. [Contribución](#contribución)
5. [Licencia](#licencia)

## Instalación

1. Clona este repositorio: `git clone <url-del-repositorio>`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias (ver sección de Variables de Entorno más abajo).

## Uso

Para ejecutar el proyecto: El servidor estará disponible en `http://localhost:3020`.

## Endpoints de la API

### Descripción general
La API de Comercializadora Azocar proporciona acceso a una variedad de recursos relacionados con productos y usuarios. Utiliza autenticación JWT para proteger los endpoints sensibles y está diseñada para admitir operaciones CRUD básicas.

### Listado de endpoints

### Autenticación

- **POST /api/user/register**: Registra un nuevo usuario.

- **POST /api/user/login**: Inicia sesión de un usuario registrado.
  
### Productos

- **GET /api/product**: Obtiene la lista de productos.
  - Respuesta exitosa: Array de objetos JSON representando los productos.

## Contribución

Si quieres contribuir al proyecto:

1. Clona este repositorio: `git clone <url-del-repositorio>`
2. Crea una rama para tu nueva característica: `git checkout -b nueva-caracteristica`
3. Realiza tus cambios y haz commit: `git commit -am 'Agrega nueva característica'`
4. Sube tu rama al repositorio: `git push origin nueva-caracteristica`
5. Abre una solicitud de extracción en GitHub.

## Pre-requisitos
_Necesario `npm`_

```
npm install -g 
```
## Autora

_Proyecto desarrollado por:_

* **Estefani Azocar** - *Ingeniera Informatica* - [proyectos](https://github.com/EstefaniAzocar)
