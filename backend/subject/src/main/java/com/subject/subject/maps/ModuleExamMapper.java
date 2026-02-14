package com.subject.subject.maps;

import com.subject.subject.dtos.ModuleExamDTO;
import com.subject.subject.entities.ModuleExam;
import com.subject.subject.entities.ModuleExamChoice;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring", uses = {ModuleExamChoiceMapper.class})
public abstract class ModuleExamMapper {
    public abstract ModuleExam dtoToEntity(ModuleExamDTO dto);
    public abstract ModuleExamDTO entityToDto(ModuleExam entity);

    @AfterMapping
    public void setRelationship(@MappingTarget ModuleExam moduleExam) {
        if(moduleExam != null && moduleExam.getModuleExamChoices() != null) {
            for(ModuleExamChoice moduleExamChoice : moduleExam.getModuleExamChoices()) {
                moduleExamChoice.setModuleExam(moduleExam);
            }
        }
    }
}
