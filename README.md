# Explorers API

API de los Explorers de Launch X que con conexión a base de datos PostgreSQL.

## GET /explorers

`localhost:3000/explorers`

Obtener la lista completa de explorers.

## GET /explorers/:id

`localhost:3000/explorers/:id`

Obtener explorer por su id.

## POST /explorers

`localhost:3000/explorers`

Crear un nuevo explorer.

### BODY raw

```
{
    "name": "name",
    "username": "username",
    "mission": "mission"
}
```

## PUT /explorers/:id

`localhost:3000/explorers/:id`

Actualizar explorer por su id.

### BODY raw

```
{
    "name": "name",
    "username": "username",
    "mission": "mission"
}
```

## DEL /explorers/:id

`localhost:3000/explorers/:id`

Eliminar explorer por su id.
