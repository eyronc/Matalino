package com.subject.subject.controllers;

import com.subject.subject.dtos.ModuleDTO;
import com.subject.subject.generics.GenericController;
import com.subject.subject.services.ModuleServiceImp;
import com.subject.subject.views.ModuleView;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/modules/")
public class ModuleController extends GenericController<ModuleDTO, ModuleView> {

    public  ModuleController(ModuleServiceImp moduleService) {
        super(moduleService);
    }

}
