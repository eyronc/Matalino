package com.subject.subject.services;

import com.subject.subject.dtos.LessonDTO;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.LessonMapper;
import com.subject.subject.repositories.LessonRepository;
import com.subject.subject.views.LessonView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonServiceImp implements GenericService<LessonDTO, LessonView> {
    private final LessonRepository lessonRepository;
    private final LessonMapper lessonMapper;
    public LessonServiceImp(LessonRepository lessonRepository, LessonMapper lessonMapper) {
        this.lessonRepository = lessonRepository;
        this.lessonMapper = lessonMapper;
    }
    @Override
    public void add(LessonDTO toAdd) {
        lessonRepository.save(lessonMapper.dtoToEntity(toAdd));
    }

    @Override
    public void delete(int delete) {

    }

    @Override
    public LessonView get(int id) {
        return null;
    }

    @Override
    public List<LessonView> getAll() {
        return List.of();
    }
}
