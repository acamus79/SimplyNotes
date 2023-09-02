package com.aec.simplynotes.services;

import com.aec.simplynotes.dto.request.EntryNoteDto;
import com.aec.simplynotes.dto.response.NoteDto;
import com.aec.simplynotes.models.NoteEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NoteService extends BasicService<NoteEntity,String> {
    NoteDto saveNote(EntryNoteDto noteDto);
    NoteDto updateNote(EntryNoteDto noteDto, String id);
    Page<NoteDto> getCategories(Pageable pageable);
}
