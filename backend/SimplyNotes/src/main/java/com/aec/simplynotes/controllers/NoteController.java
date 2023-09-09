package com.aec.simplynotes.controllers;

import com.aec.simplynotes.dto.request.EntryNoteDto;
import com.aec.simplynotes.dto.response.NoteDto;
import com.aec.simplynotes.exeptions.ValidationException;
import com.aec.simplynotes.services.NoteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.Errors;

import java.util.Map;

@RestController
@RequestMapping("/api/notes")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService service;

    /**
     * Create a new note.
     *
     * @param entryNoteDto The data of the new note.
     * @param errors Validation errors (if any).
     * @return An HTTP response with the created note in the body.
     */
    @PostMapping
    public ResponseEntity<NoteDto> create(
            @Valid @RequestBody EntryNoteDto entryNoteDto, Errors errors){
        if (errors.hasErrors()) {
            System.out.println("entro un erro");
            throw new ValidationException(errors.getFieldErrors());
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveNote(entryNoteDto));
    }

    /**
     * Updates an existing note.
     *
     * @param id The unique identifier of the note to be updated.
     * @param dto The new note data.
     * @param errors Validation errors (if any).
     * @return An HTTP response with the updated note in the body.
     */
    @PutMapping("/{id}")
    public ResponseEntity<NoteDto> update(
            @PathVariable String id,
            @Valid @RequestBody EntryNoteDto dto,
            Errors errors) {

        if (errors.hasErrors()) {
            throw new ValidationException(errors.getFieldErrors());
        }
        return ResponseEntity.status(HttpStatus.OK).body(service.updateNote(dto, id));
    }

    /**
     * Get a paginated page of notes.
     *
     * @param pageable Pageable object containing pagination information.
     * @return A page of NoteDto objects.
     */
    @GetMapping()
    public ResponseEntity<Page<NoteDto>> getNotes(
            @PageableDefault(size = 12) Pageable pageable) {
        return ResponseEntity.ok(service.getNotes(pageable));
    }

    /**
     * Get a paginated page of archived notes.
     *
     * @param pageable Pageable object containing pagination information.
     * @return A page of NoteDto objects.
     */
    @GetMapping("/archives")
    public ResponseEntity<Page<NoteDto>> getNotesArchived(
            @PageableDefault(size = 12) Pageable pageable) {
        return ResponseEntity.ok(service.findArchives(pageable));
    }

    /**
     * Delete a note by its ID.
     *
     * @param id The ID of the note to delete.
     * @return An HTTP response with status NO_CONTENT if the note was successfully deleted
     *         or NOT_FOUND if the note was not found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNote(
            @PathVariable String id) {
        if (service.existById(id)) {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .header("Content-Type", "application/json")
                    .body("{\"message\": \"Note not found\"}");
        }
    }
}
