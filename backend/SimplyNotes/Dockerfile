FROM openjdk:17-jdk-alpine
LABEL authors="acamus"
COPY target/SimplyNotes-0.0.1-SNAPSHOT.jar java_api.jar
ENTRYPOINT ["java", "-jar", "java_api.jar"]