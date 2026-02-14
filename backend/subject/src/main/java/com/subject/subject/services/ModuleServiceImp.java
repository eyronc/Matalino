package com.subject.subject.services;

import com.subject.subject.dtos.ModuleDTO;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.ModuleMapper;
import com.subject.subject.repositories.ModuleRepository;
import com.subject.subject.views.ModuleView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleServiceImp implements GenericService<ModuleDTO, ModuleView> {
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

    }

    @Override
    public ModuleView get(int id) {
        return null;
    }

    @Override
    public List<ModuleView> getAll() {
        return List.of();
    }
}
