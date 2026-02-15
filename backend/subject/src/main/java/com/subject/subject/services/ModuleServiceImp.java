package com.subject.subject.services;

import com.subject.subject.dtos.ModuleDTO;
import com.subject.subject.exceptions.SubjectException;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.ModuleMapper;
import com.subject.subject.repositories.ModuleRepository;
import com.subject.subject.views.ModuleView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleServiceImp implements GenericService<ModuleDTO> {

    private final ModuleRepository moduleRepository;
    private final ModuleMapper moduleMapper;

    public ModuleServiceImp(ModuleRepository moduleRepository, ModuleMapper moduleMapper) {
        this.moduleRepository = moduleRepository;
        this.moduleMapper = moduleMapper;
    }
    @Override
    public void add(ModuleDTO toAdd) {
        moduleRepository.save(moduleMapper.dtoToEntity(toAdd));
    }
    @Override
    public void delete(int delete) {
        moduleRepository.deleteById(delete);
    }

    @Override
    public ModuleDTO get(int id) {
        return moduleMapper.entityToDto(moduleRepository.findById(id).orElseThrow(() -> new SubjectException("No Module found with id: " + id)));
    }

    @Override
    public List<ModuleDTO> getAll() {
        return moduleMapper.entityToDtoList(moduleRepository.findAll());
    }
}
