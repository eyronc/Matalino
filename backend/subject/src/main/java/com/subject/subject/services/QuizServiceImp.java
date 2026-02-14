package com.subject.subject.services;

import com.subject.subject.dtos.QuizDTO;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.QuizMapper;
import com.subject.subject.repositories.QuizRepository;
import com.subject.subject.views.QuizView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImp implements GenericService<QuizDTO, QuizView> {
    private  final QuizRepository quizRepository;
    private final QuizMapper quizMapper;
    public QuizServiceImp(QuizRepository quizRepository, QuizMapper quizMapper) {
        this.quizRepository = quizRepository;
        this.quizMapper = quizMapper;
    }
    @Override
    public void add(QuizDTO toAdd) {
        quizRepository.save(quizMapper.dtoToEntity(toAdd));
    }

    @Override
    public void delete(int delete) {

    }

    @Override
    public QuizView get(int id) {
        return null;
    }

    @Override
    public List<QuizView> getAll() {
        return List.of();
    }
}
