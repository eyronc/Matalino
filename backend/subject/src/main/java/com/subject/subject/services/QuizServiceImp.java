package com.subject.subject.services;

import com.subject.subject.dtos.QuizDTO;
import com.subject.subject.exceptions.SubjectException;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.QuizMapper;
import com.subject.subject.repositories.QuizRepository;
import com.subject.subject.views.QuizView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImp implements GenericService<QuizDTO> {

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
        quizRepository.deleteById(delete);
    }

    @Override
    public QuizDTO get(int id) {
        return quizMapper.entityToDTO(quizRepository.findById(id).orElseThrow(() -> new SubjectException("No quiz")));
    }

    @Override
    public List<QuizDTO> getAll() {
        return quizMapper.entityToDtoList(quizRepository.findAll());
    }
}
