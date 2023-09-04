package com.aec.simplynotes.seeders;
import com.aec.simplynotes.models.NoteEntity;
import com.aec.simplynotes.repositories.INoteRepository;
import jakarta.validation.constraints.NotEmpty;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class NoteSeeder implements CommandLineRunner{

    private final INoteRepository repository;

    @Override
    public void run(String... args) throws Exception {
        loadActivityData();
    }

    private void loadActivityData() {
        if (repository.count() == 0) {
            NoteEntity n1 = new NoteEntity(null, "Bienvenido/a a SimplyNotes",
                    "SimplyNote esta dedicado a simplificar la forma en que tomas y gestionas tus notas. Ya sea que necesites tomar apuntes rápidos, hacer listas de tareas o simplemente recordar ideas importantes, SimplyNotes está aquí para ayudarte.",
                    false,null, LocalDateTime.now(), LocalDateTime.now(),false);
            NoteEntity n2 = new NoteEntity(null, "¿Qué puedes hacer con SimplyNotes?", "Crear notas: Crea nuevas notas de forma rápida y sencilla. Solo tienes que hacer clic en el botón \"Nueva Nota\" y empezar a escribir.\n" +
                    "\n" +
                    "Editar y personalizar: Modifica tus notas en cualquier momento. Cambia el título, el contenido y más para adaptar tus notas a tus necesidades.\n" +
                    "\n" +
                    "Archivar tus ideas: ¿Tienes notas que ya no necesitas en tu vista principal? Archívalas para mantener tu espacio de trabajo organizado.\n" +
                    "\n" +
                    "Fácil de usar: SimplyNotes ha sido diseñado pensando en la simplicidad y la eficiencia. No te preocupes por aprender un complicado sistema; comienza a utilizarlo de inmediato.",
                    false,null, LocalDateTime.now(), LocalDateTime.now(),false);
            NoteEntity n3 = new NoteEntity(null, "Sobre mi", "Me llamo Adrian Camus, Soy Padre, me esfuerzo por ser un capacitador, desarrollador de medios digitales, programador en constante formación, un analista con experiencia, pero sobre todo me considero una persona que busca soluciones, caminos y posibilidades.",
                    false,null, LocalDateTime.now(), LocalDateTime.now(),false);
            NoteEntity n4 = new NoteEntity(null, "Historia del proyecto", "Este proyecto surgio como un desafio de realizar una Aplicación web de página unica en 3 dias, incluyendo la interfaz de usuario y tambien la gestión de datos",
                    false,null, LocalDateTime.now(), LocalDateTime.now(),false);
            NoteEntity n5 = new NoteEntity(null, "Tecnologías utilizadas", "Para el frontend se utilizo React y se comunica con una API REST desarrollada en Java 17 con SpringBoot sobre un motor de base de datos PostgreSQL",
                    false,null, LocalDateTime.now(), LocalDateTime.now(),false);
            NoteEntity n6 = new NoteEntity(null, "Agradecimiento", "Desarrollar esto omo un desafio en tres dias fue para mi un gran paso de aprendizaje por lo qu estoy muy agradecido",
                    false,null, LocalDateTime.now(), LocalDateTime.now(),false);
            NoteEntity n7 = new NoteEntity(null, "Funcionalidades", "Creo que faltan cosas para agregar, me gustaria poder identificar las notas que contengan contraseñas y encriptarlas, tambien usar Electron para hacerla una aplicacion de escritorio",
                    true,null, LocalDateTime.now(), LocalDateTime.now(),false);
            NoteEntity n8 = new NoteEntity(null, "Recordatorios", "Cosas que me falto de terminar agrtegar seguridad a la api con JWT y implementar un Login",
                    true,null, LocalDateTime.now(), LocalDateTime.now(),false);
            repository.save(n1);
            repository.save(n2);
            repository.save(n3);
            repository.save(n4);
            repository.save(n5);
            repository.save(n6);
            repository.save(n7);
            repository.save(n8);
        }
    }

}

