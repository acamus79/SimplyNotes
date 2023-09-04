<div style="display: inline_block">
  <a href="https://github.com/topics/java" target="_blank"><img align="center" alt="Made With JAVA"  src="https://img.shields.io/badge/Made%20With-Java-blue"></a>
  <a href="https://github.com/topics/react" target="_blank"><img align="center" alt="Made With JAVA"  src="https://img.shields.io/badge/Made_With-React-blue"></a>
  <a href="https://documenter.getpostman.com/view/23097436/2s9Y5eLybV" target="_blank"><img align="center" alt="POSTMAN DOC"  src="https://img.shields.io/badge/Postman-ApiDoc-orange"></a>


# SimplyNotes - A small Notes application developed in 3 days

¡Bienvenido a SimplyNotes! Esta es una aplicación web que te ayudará a organizar y gestionar tus notas de manera sencilla y eficiente. Ya sea que necesites capturar tus ideas, llevar un registro de tus tareas pendientes, o simplemente tomar notas rápidas, SimplyNotes está diseñado para simplificar tu vida y mantener todo en orden.

![03-09-2023_23-04-55](https://github.com/acamus79/SimplyNotes/assets/85143329/0af24197-5c2d-47d7-9f0e-180907edfea2)


## Características Destacadas

- **Creación de Notas**: Crea nuevas notas con facilidad, proporcionando un título y el contenido de tu nota.

- **Edición y Actualización**: Modifica tus notas en cualquier momento y mantén la información actualizada.

- **Archivado**: Organiza tus notas archivándolas, lo que te permite concentrarte en lo que es importante en el momento.

- **Eliminar Notas**: Elimina notas que ya no necesitas.

- **Interfaz Amigable**: Una interfaz de usuario intuitiva y atractiva que facilita la navegación y el uso de la aplicación.

## Cómo Iniciar

Para comenzar a utilizar SimplyNotes, simplemente sigue estos pasos:

1. **Clona el Repositorio**: Clona este repositorio en tu máquina local.

2. **Instala Dependencias**: Ejecuta `npm install` para instalar las dependencias necesarias.

3. **Inicia la Aplicación**: Ejecuta `npm start` para iniciar la aplicación en tu navegador. La aplicación se abrirá automáticamente o puedes acceder a ella a través de [http://localhost:3000](http://localhost:3000).

4. **Comienza a Tomar Notas**: ¡Comienza a crear, editar y organizar tus notas de inmediato!



## Tecnologías Utilizadas

- **React**: La aplicación frontend se desarrolla utilizando React, una biblioteca de JavaScript de código abierto.

- **API Backend**: SimplyNotes se integra con una API backend para gestionar las notas y la lógica de la aplicación.

- **SweetAlert2**: Se utiliza SweetAlert2 para crear notificaciones y alertas interactivas en la aplicación.

---

# Backend de la Aplicación SimplyNotes
 
 El backend está desarrollado en Java 17 con Spring Boot 3 y utiliza una base de datos PostgreSQL para almacenar los datos de las notas y los usuarios.

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

## Contribuir

Si te gustaría contribuir al desarrollo de SimplyNotes, ¡te damos la bienvenida! Siéntete libre de abrir problemas (issues) o enviar solicitudes de extracción (pull requests) con tus contribuciones.

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de utilizarlo y modificarlo de acuerdo a tus necesidades.

¡Esperamos que disfrutes usando SimplyNotes para simplificar tu vida y mantener todas tus notas en orden!



## Autor

- Adrian E. Camus
