package com.aec.simplynotes.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class NoteDto {

    @Schema(description = "Id of the category entity.", example = "528f22c3-1f9c-493f-8334-c70b83b5b885")
    private String id;

    private String title;

    private String content;

    private Boolean archived;

    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd-MM-yyyy HH:mm")
    private LocalDateTime createdAt;

    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd-MM-yyyy HH:mm")
    private LocalDateTime updatedAt;

}