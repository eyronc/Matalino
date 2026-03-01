package com.subject.subject.services;

import com.subject.subject.dtos.LessonDTO;
import com.subject.subject.entities.Lesson;
import com.subject.subject.exceptions.SubjectException;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.LessonMapper;
import com.subject.subject.repositories.LessonRepository;
import com.subject.subject.views.LessonView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonServiceImp implements GenericService<LessonDTO> {

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
        lessonRepository.deleteById(delete);
    }
    @Override
    public LessonDTO get(int id) {
        Lesson lesson =  lessonRepository.findById(id).orElseThrow(() -> new SubjectException("Lesson Not Found"));
        return lessonMapper.entityToDto(lesson);
    }
    @Override
    public List<LessonDTO> getAll() {
        return lessonMapper.entityToDtoList(lessonRepository.findAll());
    }
}
