package com.example.module_service.controllers;

import com.example.module_service.dtos.ModuleDTO;
import com.example.module_service.dtos.ModuleRequest;
import com.example.module_service.repositories.ModuleRepository;
import com.example.module_service.services.ModuleService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/modules/")
class ModuleController {

    private final ModuleService service;

    public ModuleController(ModuleService service) {
        this.service = service;
    }
    @PostMapping("create-module")
    @ResponseStatus(HttpStatus.CREATED)
    public void createModule(@RequestBody ModuleRequest moduleRequest) {
        service.createModule(moduleRequest);
    }
    @GetMapping("subject/{id}/modules")
    @ResponseStatus(HttpStatus.OK)
    public List<ModuleDTO> getSubjectModules(@PathVariable int id) {
        return service.getSubjectModules(id);
    }

}
