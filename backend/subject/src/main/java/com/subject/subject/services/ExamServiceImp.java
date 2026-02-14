package com.subject.subject.services;

import com.subject.subject.dtos.ExamDTO;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.ExamMapper;
import com.subject.subject.repositories.ExamRepository;
import com.subject.subject.views.ExamView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImp implements GenericService<ExamDTO, ExamView> {
    private final ExamRepository examRepository;
    private final ExamMapper examMapper;
    public ExamServiceImp(ExamRepository examRepository, ExamMapper examMapper) {
        this.examRepository = examRepository;
        this.examMapper = examMapper;
    }
    @Override
    public void add(ExamDTO toAdd) {
        examRepository.save(examMapper.dtoToEntity(toAdd));
    }

    @Override
    public void delete(int delete) {

    }

    @Override
    public ExamView get(int id) {
        return null;
    }

    @Override
    public List<ExamView> getAll() {
        return List.of();
    }
}
