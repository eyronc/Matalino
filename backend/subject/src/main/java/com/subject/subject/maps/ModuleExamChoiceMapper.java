package com.subject.subject.maps;

import com.subject.subject.dtos.ModuleExamChoiceDTO;
import com.subject.subject.entities.ModuleExamChoice;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public abstract class ModuleExamChoiceMapper {
    public abstract ModuleExamChoice dtoToEntity(ModuleExamChoiceDTO moduleExamChoiceDTO);
    public abstract ModuleExamChoiceDTO entityToDto(ModuleExamChoice moduleExamChoice);
}
