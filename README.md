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

# Students API

API de los Students de Launch X con conexión a base de datos PostgreSQL.

## GET /students

`localhost:3000/students`

Obtener la lista completa de students.

## GET /students/:id

`localhost:3000/students/:id`

Obtener student por su id.

## POST /students

`localhost:3000/students`

Crear un nuevo student.

### BODY raw

```
{
    "name": "name",
    "lang": "lang",
    "missionCommander": "missionCommander",
    "enrrolments": 0,
    "hasCertification": false
}
```

## PUT /students/:id

`localhost:3000/students/:id`

Actualizar student por su id.

### BODY raw

```
{
    "name": "name",
    "lang": "lang",
    "missionCommander": "missionCommander",
    "enrrolments": 0,
    "hasCertification": false
}
```

## DEL /students/:id

`localhost:3000/students/:id`

Eliminar student por su id.
