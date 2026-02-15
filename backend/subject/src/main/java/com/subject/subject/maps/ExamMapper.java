package com.subject.subject.maps;

import com.subject.subject.dtos.ExamDTO;
import com.subject.subject.dtos.ModuleExamChoiceDTO;
import com.subject.subject.entities.Exam;
import com.subject.subject.entities.ModuleExam;
import com.subject.subject.entities.ModuleExamChoice;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring", uses = {ModuleExamMapper.class})
public abstract class ExamMapper {
    public abstract Exam dtoToEntity(ExamDTO examDTO);
    public abstract ExamDTO entityToDto(Exam exam);
    public abstract List<ExamDTO> entityToDtoList(List<Exam> exams);

    @AfterMapping
    public void setRelationShip(@MappingTarget Exam exam) {
        if (exam != null && exam.getModuleExams() != null) {
            for (ModuleExam moduleExam : exam.getModuleExams()) {
                moduleExam.setExam(exam);
                for(ModuleExamChoice moduleExamChoice : moduleExam.getModuleExamChoices()) {
                    moduleExamChoice.setModuleExam(moduleExam);
                }
            }
        }
    }
}
