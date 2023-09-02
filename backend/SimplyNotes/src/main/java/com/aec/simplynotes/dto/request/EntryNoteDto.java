package com.aec.simplynotes.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class EntryNoteDto {
    @NotBlank
    @Size(max = 60, message = "The maximum size for the name is sixty characters")
    private String title;

    @NotBlank
    @Size(max = 1800, message = "The maximum size for the content is 255 characters")
    private String content;
}
