package com.subject.subject.services;

import com.subject.subject.dtos.LessonQuizDTO;
import com.subject.subject.dtos.ModuleExamDTO;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.LessonQuizMapper;
import com.subject.subject.repositories.LessonQuizRepository;
import com.subject.subject.views.LessonQuizView;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonQuizImp implements GenericService<LessonQuizDTO, LessonQuizView> {

    public final LessonQuizRepository  repository;
    private final LessonQuizMapper mapper;
    public LessonQuizImp(LessonQuizRepository repository,  LessonQuizMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
    @Override
    public void add(LessonQuizDTO toAdd) {
        repository.save(mapper.dtoToEntity(toAdd));
    }

    @Override
    public void delete(int delete) {

    }

    @Override
    public LessonQuizView get(int id) {
        return null;
    }

    @Override
    public List<LessonQuizView> getAll() {
        return List.of();
    }
}
