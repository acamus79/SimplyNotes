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
     * and archive field set to false
     * @return List(Entity)
     */
    @Query("SELECT n FROM NoteEntity n WHERE n.softDelete = false AND n.archived = false")
    public List<NoteEntity> searchAllNonDeleted();

    /**
     * Method to search only the records with the softDelete field set to false,
     * and archive field set to true
     * @return List(Entity)
     */
    @Query("SELECT n FROM NoteEntity n WHERE n.softDelete = false AND n.archived = true")
    public List<NoteEntity> searchAllArchived();

    @Query("SELECT n FROM NoteEntity n WHERE n.user = :id AND n.softDelete = false")
    public List<NoteEntity> searchAllNonDeletedByUserId(String id);

}
