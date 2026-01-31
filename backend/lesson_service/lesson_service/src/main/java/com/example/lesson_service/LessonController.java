package com.example.lesson_service;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
class LessonController {

    private final LessonService lessonService;

    public LessonController(LessonService lessonService){
        this.lessonService = lessonService;
    }

    @PostMapping("add")
    public void addSubject(@RequestBody SubjectRequest subjectRequest){
        lessonService.addSubject(subjectRequest);
    }
    @GetMapping("all")
    public List<SubjectDTO> getAllSubjects() {
        return lessonService.getAllSubjects();
    }


}
