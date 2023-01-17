package com.example.todolistbackend.controller;

import com.example.todolistbackend.model.Task;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/task")
@Slf4j
public class TaskController {

    @GetMapping
    public List<Task> getAllTasks() {
        Task task1 = Task.builder()
                .title("Task 1")
                .description("Some description 1")
                .creationDate(LocalDateTime.now())
                .exportationDate(LocalDateTime.now())
                .isDone(false)
                .build();

        Task task2 = Task.builder()
                .title("Task 2")
                .description("Some description 2")
                .creationDate(LocalDateTime.now())
                .exportationDate(LocalDateTime.now())
                .isDone(false)
                .build();

        Task task3 = Task.builder()
                .title("Task 3")
                .description("Some description 3")
                .creationDate(LocalDateTime.now())
                .exportationDate(LocalDateTime.now())
                .isDone(false)
                .build();

        return List.of(task1, task2, task3);
    }
}
