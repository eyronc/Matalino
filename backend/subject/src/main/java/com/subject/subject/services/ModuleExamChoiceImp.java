package com.subject.subject.services;

import com.subject.subject.dtos.ModuleExamChoiceDTO;
import com.subject.subject.exceptions.SubjectException;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.ModuleExamChoiceMapper;
import com.subject.subject.repositories.ModuleExamChoiceRepository;
import com.subject.subject.views.ModuleExamChoicesView;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ModuleExamChoiceImp implements GenericService<ModuleExamChoiceDTO> {

    private final ModuleExamChoiceRepository repository;
    private final ModuleExamChoiceMapper mapper;

    public ModuleExamChoiceImp(ModuleExamChoiceRepository repository, ModuleExamChoiceMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
    @Override
    public void add(ModuleExamChoiceDTO toAdd) {
        repository.save(mapper.dtoToEntity(toAdd));
    }

    @Override
    public void delete(int delete) {
        repository.deleteById(delete);
    }

    @Override
    public ModuleExamChoiceDTO get(int id) {
        return mapper.entityToDto(repository.findById(id).orElseThrow(() -> new SubjectException("No module exam")));
    }

    @Override
    public List<ModuleExamChoiceDTO> getAll() {
        return mapper.entityToDtoList(repository.findAll());
    }
}
