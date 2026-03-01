package com.subject.subject.services;

import com.subject.subject.dtos.ModuleExamDTO;
import com.subject.subject.exceptions.SubjectException;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.ModuleExamMapper;
import com.subject.subject.repositories.ModuleExamRepository;
import com.subject.subject.views.ModuleExamView;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleExamImp implements GenericService<ModuleExamDTO> {

    private final ModuleExamRepository repository;
    private final ModuleExamMapper mapper;
    public ModuleExamImp(ModuleExamRepository repository, ModuleExamMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public void add(ModuleExamDTO toAdd) {
        repository.save(mapper.dtoToEntity(toAdd));
    }

    @Override
    public void delete(int delete) {
        repository.deleteById(delete);
    }

    @Override
    public ModuleExamDTO get(int id) {
        return mapper.entityToDto(repository.findById(id).orElseThrow(() -> new SubjectException("Module Exam Not Found!")));
    }

    @Override
    public List<ModuleExamDTO> getAll() {
        return mapper.entityToDtoList(repository.findAll());
    }
}
