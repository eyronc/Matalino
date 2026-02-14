package com.subject.subject.services;

import com.subject.subject.dtos.QuizChoiceDTO;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.QuizChoiceMapper;
import com.subject.subject.repositories.QuizChoiceRepository;
import com.subject.subject.views.QuizChoicesView;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizChoiceImp implements GenericService<QuizChoiceDTO, QuizChoicesView> {

    private final QuizChoiceRepository repository;
    private final QuizChoiceMapper mapper;

    public QuizChoiceImp(QuizChoiceRepository repository, QuizChoiceMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
    @Override
    public void add(QuizChoiceDTO toAdd) {
        repository.save(mapper.toEntity(toAdd));
    }
    @Override
    public void delete(int delete) {

    }

    @Override
    public QuizChoicesView get(int id) {
        return null;
    }

    @Override
    public List<QuizChoicesView> getAll() {
        return List.of();
    }
}
