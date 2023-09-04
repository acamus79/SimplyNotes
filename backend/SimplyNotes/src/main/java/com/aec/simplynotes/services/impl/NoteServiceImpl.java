package com.aec.simplynotes.services.impl;

import com.aec.simplynotes.dto.request.EntryNoteDto;
import com.aec.simplynotes.dto.response.NoteDto;
import com.aec.simplynotes.models.NoteEntity;
import com.aec.simplynotes.repositories.INoteRepository;
import com.aec.simplynotes.services.NoteService;
import com.aec.simplynotes.utils.ObjectMapperUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class NoteServiceImpl extends BasicServiceImpl<NoteEntity, String, INoteRepository> implements NoteService {
    public static final String NO_EXIST = "Nota no encontrada";

    public NoteServiceImpl(INoteRepository repository) {
        super(repository);
    }

    /**
     * Save a new note based on an EntryNoteDto object.
     *
     * @param dto The EntryNoteDto object containing note data.
     * @return A NoteDto object representing the saved note.
     */
    @Override
    @Transactional
    public NoteDto saveNote(EntryNoteDto dto) {
        NoteEntity note = ObjectMapperUtils.map(dto, NoteEntity.class);
        note = this.save(note);
        return ObjectMapperUtils.map(note, NoteDto.class);
    }

    /**
     * Update an existing note based on an EntryNoteDto object and an ID.
     *
     * @param dto The EntryNoteDto object containing updated note data.
     * @param id  The ID of the note to be updated.
     * @return A NoteDto object representing the updated note.
     * @throws ResponseStatusException If the note does not exist, an exception with HTTP status 404 (NOT_FOUND) is thrown.
     */
    @Override
    @Transactional
    public NoteDto updateNote(EntryNoteDto dto, String id) {

        if(this.existById(id)){
            NoteEntity note = findById(id).get();
            note = ObjectMapperUtils.map(dto, note);
            note = this.edit(note);
            return ObjectMapperUtils.map(note, NoteDto.class);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, NO_EXIST);
        }
    }


    /**
     * Get a paginated page of notes.
     *
     * @param pageable Pageable object containing pagination information.
     * @return A page of NoteDto objects.
     * @throws ResponseStatusException If no notes are found, an exception with HTTP status 404 (NOT_FOUND) is thrown.
     */
    @Override
    public Page<NoteDto> getNotes(Pageable pageable) {
        List<NoteEntity> notes = repository.searchAllNonDeleted();
        return getNoteDtos(pageable, notes);
    }

    /**
     * Get a page of archived notes.
     *
     * @param pageable Pageable object containing pagination information.
     * @return A page of NoteDto objects for archived notes.
     * @throws ResponseStatusException If no archived notes are found, an exception with HTTP status 404 (NOT_FOUND) is thrown.
     */
    @Override
    public Page<NoteDto> findArchives(Pageable pageable) {
        List<NoteEntity> notes = repository.searchAllArchived();
        return getNoteDtos(pageable, notes);
    }

    /**
     * Retrieves a paginated list of NoteDto objects from a list of NoteEntity objects.
     *
     * @param pageable Pageable object containing pagination information.
     * @param notes    List of NoteEntity objects to be converted to NoteDto objects.
     * @return A page of NoteDto objects.
     * @throws ResponseStatusException If the list of notes is empty, an exception with HTTP status 404 (NOT_FOUND) is thrown.
     */
    private Page<NoteDto> getNoteDtos(Pageable pageable, List<NoteEntity> notes) {
        List<NoteDto> archives;

        if(!notes.isEmpty()){
            archives = ObjectMapperUtils.mapAll(notes, NoteDto.class);

            final int start = (int) pageable.getOffset();
            final int end = Math.min((start + pageable.getPageSize()), archives.size());

            return new PageImpl<>(archives.subList(start, end), pageable, archives.size());
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, NO_EXIST);
        }
    }


}
