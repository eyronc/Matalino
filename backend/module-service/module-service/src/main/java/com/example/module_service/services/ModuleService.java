package com.example.module_service.services;

import com.example.module_service.dtos.ModuleDTO;
import com.example.module_service.dtos.ModuleRequest;
import com.example.module_service.repositories.ModuleRepository;
import org.springframework.stereotype.Service;
import com.example.module_service.entity.Module;

import java.util.List;

@Service
public class ModuleService {

    private final ModuleRepository moduleRepository;

    public ModuleService(ModuleRepository moduleRepository) {
        this.moduleRepository = moduleRepository;
    }

    public void createModule(ModuleRequest module) {
       moduleRepository.save(Module.builder()
                       .title(module.title())
                       .subjectId(module.subjectId())
               .build());
    }

    public List<ModuleDTO> getSubjectModules(int id) {
        return moduleRepository.findAllBySubjectId(id);
    }
}
