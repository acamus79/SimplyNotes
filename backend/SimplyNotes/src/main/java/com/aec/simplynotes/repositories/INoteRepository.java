package com.aec.simplynotes.repositories;

import com.aec.simplynotes.models.NoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface INoteRepository  extends JpaRepository<NoteEntity, String> {

    /**
     * Method to search only the records with the softDelete field set to false,
     *
     * @return List(Entity)
     */
    @Query("SELECT n FROM NoteEntity n WHERE n.softDelete = false")
    public List<NoteEntity> searchAllNonDeleted();

    @Query("SELECT n FROM NoteEntity n WHERE n.user = :id AND n.softDelete = false")
    public List<NoteEntity> searchAllNonDeletedByUserId(String id);

}
