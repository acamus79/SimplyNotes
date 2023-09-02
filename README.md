# SimplyNotes
 A small Notes application developed in 3 days


# Backend de la Aplicación SimplyNotes

Este es el backend de una aplicación web llamada SimplyNotes, que permite a los usuarios tomar notas, etiquetarlas y filtrarlas. El backend está desarrollado en Java 17 con Spring Boot 3 y utiliza una base de datos PostgreSQL para almacenar los datos de las notas y los usuarios.

## Requisitos

Para ejecutar el backend de la aplicación, necesitarás tener instalado lo siguiente:

- Java 17
- Apache Maven
- PostgreSQL 9.6 o superior

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar correctamente la base de datos PostgreSQL. Puedes hacerlo siguiendo estos pasos:

1. Crea una base de datos en PostgreSQL para la aplicación.
2. Actualiza las propiedades de configuración de la base de datos en el archivo `src/main/resources/application.properties` con la URL, usuario y contraseña de tu base de datos.

Ejemplo de configuración de base de datos en `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/nombre_de_la_base_de_datos
spring.datasource.username=usuario_de_la_base_de_datos
spring.datasource.password=contraseña_de_la_base_de_datos
```

## Ejecución

Puedes ejecutar la aplicación utilizando Maven. Abre una terminal en el directorio raíz del proyecto y ejecuta el siguiente comando:

```bash
mvn spring-boot:run
```

La aplicación se ejecutará en `http://localhost:8080`.

## API REST

El backend de SimplyNotes expone una API REST que se utiliza para interactuar con las notas y los usuarios. Aquí hay algunas de las operaciones disponibles:

- Crear una nueva nota
- Actualizar una nota existente
- Listar todas las notas de un usuario
- Listar notas archivadas
- Crear un nuevo usuario

Puedes encontrar detalles sobre cómo utilizar estas operaciones en la documentación de la API.

## Documentación de la API Postman

La documentación de la API está disponible en Posman, lo que facilita la exploración y prueba de los endpoints de la aplicación. Puedes acceder a la documentación en (TODO: Completar con la Coleccion publicada)

## Dependencias Principales

- Spring Boot 3
- Spring Data JPA
- Hibernate
- PostgreSQL

## Autor

- Adrian E. Camus

## Licencia

Este proyecto está bajo la licencia [Nombre de la Licencia]. Puedes encontrar más detalles en el archivo `LICENSE`.

---
