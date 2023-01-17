package com.example.todolistbackend.model;

import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@Builder(toBuilder = true)
public class Task {
    UUID id;
    String title;
    String description;
    LocalDateTime creationDate;
    LocalDateTime expirationDate;
    boolean isDone;
}
