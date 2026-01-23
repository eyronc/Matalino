package com.example.lesson_service.services;

import com.example.lesson_service.dtos.LessonDTO;
import com.example.lesson_service.dtos.LessonRequest;
import com.example.lesson_service.entity.Lesson;
import com.example.lesson_service.repo.LessonRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LessonService {

    private final LessonRepository lessonRepository;
    public LessonService(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }
    public void createLesson(LessonRequest lesson) {
        lessonRepository.save(Lesson.builder()
                        .title(lesson.title())
                        .content(lesson.content())
                        .moduleId(lesson.moduleId())
                .build());
    }
    public LessonDTO getLesson(int id) {
        return lessonRepository.findLessonByModuleId(id);
    }
    public List<LessonDTO> getLessons(int id) {
        return lessonRepository.findAllLessonsByModuleId(id);
    }
}
