package com.example.subject_service.controllers;

import com.example.subject_service.dtos.SubjectDTO;
import com.example.subject_service.dtos.SubjectRequest;
import com.example.subject_service.repo.SubjectRepository;
import com.example.subject_service.services.SubjectService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subjects/")
class SubjectController {

    private final SubjectService service;
    public SubjectController(SubjectService service) {
        this.service = service;
    }

    @PostMapping("create-subject")
    @ResponseStatus(HttpStatus.CREATED)
    public void createSubject(@RequestBody SubjectRequest lesson) {
        service.createSubject(lesson);
    }

    @GetMapping("get-subject/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SubjectDTO getSubject(@PathVariable int id) {
        return service.getSubject(id);
    }

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<SubjectDTO> getSubjects() {

        return service.getSubjects();
    }


}
