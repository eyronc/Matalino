package com.subject.subject.maps;

import com.subject.subject.dtos.ModuleDTO;
import com.subject.subject.dtos.ModuleExamChoiceDTO;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import com.subject.subject.entities.Module;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring", uses = {LessonMapper.class, ExamMapper.class})
public abstract class ModuleMapper {
    public abstract Module dtoToEntity(ModuleDTO moduleDTO);
    public abstract ModuleDTO entityToDto(Module module);
    public abstract List<ModuleDTO> entityToDtoList(List<Module> modules);

    @AfterMapping
    public void setRelationship(@MappingTarget Module module) {
        if(module != null && module.getExam() != null)
            module.getExam().setModule(module);
    }

}
