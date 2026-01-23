package com.example.lesson_service.repo;

import com.example.lesson_service.dtos.LessonDTO;
import com.example.lesson_service.entity.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Integer> {
    LessonDTO findLessonByModuleId(int moduleId);
    List<LessonDTO> findAllLessonsByModuleId(int moduleId);
}
