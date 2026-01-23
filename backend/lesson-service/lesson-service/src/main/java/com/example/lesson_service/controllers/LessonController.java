package com.example.lesson_service.controllers;

import com.example.lesson_service.dtos.LessonDTO;
import com.example.lesson_service.dtos.LessonRequest;
import com.example.lesson_service.services.LessonService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lessons/")
class LessonController {
    private final LessonService service;

    public LessonController(LessonService service) {
        this.service = service;
    }

    @PostMapping("create-lesson")
    @ResponseStatus(HttpStatus.CREATED)
    public void createLesson(@RequestBody LessonRequest lesson) {
        service.createLesson(lesson);
    }

    @GetMapping("get-lesson/{id}")
    @ResponseStatus(HttpStatus.OK)
    public LessonDTO getLesson(@PathVariable int id) {
        return service.getLesson(id);
    }

    @GetMapping("get-lessons/module/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<LessonDTO> getUser(@PathVariable int id) {
        return service.getLessons(id);
    }
}
