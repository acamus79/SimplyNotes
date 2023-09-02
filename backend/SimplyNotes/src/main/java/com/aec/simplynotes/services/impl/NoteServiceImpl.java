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
     * @param dto
     * @return
     */
    @Override
    @Transactional
    public NoteDto saveNote(EntryNoteDto dto) {
        NoteEntity note = ObjectMapperUtils.map(dto, NoteEntity.class);
        note = this.save(note);
        return ObjectMapperUtils.map(note, NoteDto.class);
    }

    /**
     * @param dto
     * @return
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
     * Gets a paginated page of notes.
     *
     * @param pageable Pageable object containing pagination information.
     * @return A page of NoteDto objects.
     * @throws ResponseStatusException If no notes are found, an exception with HTTP status 404 (NOT_FOUND) is thrown.
     */
    @Override
    public Page<NoteDto> getNotes(Pageable pageable) {

        List<NoteEntity> notes = repository.searchAllNonDeleted();
        List<NoteDto> response;

        if(!notes.isEmpty()){
            response = ObjectMapperUtils.mapAll(notes, NoteDto.class);

            final int start = (int) pageable.getOffset();
            final int end = Math.min((start + pageable.getPageSize()), response.size());

            return new PageImpl<>(response.subList(start, end), pageable, response.size());
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, NO_EXIST);
        }

    }



}
