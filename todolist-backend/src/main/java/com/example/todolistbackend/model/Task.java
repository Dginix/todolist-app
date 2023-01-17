package com.example.todolistbackend.model;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder(toBuilder = true)
public class Task {
    String title;
    String description;
    LocalDateTime creationDate;
    LocalDateTime exportationDate;
    boolean isDone;
}
