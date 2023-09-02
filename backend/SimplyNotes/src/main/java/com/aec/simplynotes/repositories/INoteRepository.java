package com.aec.simplynotes.repositories;

import com.aec.simplynotes.models.NoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INoteRepository  extends JpaRepository<NoteEntity, String> {
}
