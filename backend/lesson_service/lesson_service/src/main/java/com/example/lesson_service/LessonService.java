package com.example.lesson_service;

import jdk.jshell.Snippet;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
class LessonService {

    private final LessonRepository lessonRepository;
    public LessonService(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    public List<SubjectDTO> getAllSubjects() {
        return lessonRepository.findAll().stream().map(lesson -> new SubjectDTO(lesson.getId(), lesson.getName(), lesson.getDescription())).collect(Collectors.toList());
    }

    public void addSubject(SubjectRequest subjectRequest) {
        try {
            lessonRepository.save(Lesson.builder()
                    .name(subjectRequest.name())
                    .description(subjectRequest.description())
                    .build());
            log.info("New subject has been added.");
        }catch (Exception e) {
            log.error("Add lesson failed{}",e.getMessage());
        }

    }
}
