package com.subject.subject.services;

import com.subject.subject.dtos.ExamDTO;
import com.subject.subject.entities.Exam;
import com.subject.subject.exceptions.SubjectException;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.ExamMapper;
import com.subject.subject.repositories.ExamRepository;
import com.subject.subject.views.ExamView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImp implements GenericService<ExamDTO> {
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
        examRepository.deleteById(delete);
    }
    @Override
    public ExamDTO get(int id) {
        Exam exam = examRepository.findById(id).orElseThrow(() -> new SubjectException("No such exam"));
        return examMapper.entityToDto(exam);
    }
    @Override
    public List<ExamDTO> getAll() {
        return examMapper.entityToDtoList(examRepository.findAll());
    }
}
