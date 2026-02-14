package com.subject.subject.maps;

import com.subject.subject.dtos.QuizChoiceDTO;
import com.subject.subject.entities.QuizChoice;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuizChoiceMapper {
    public QuizChoice toEntity(QuizChoiceDTO dto);
    public QuizChoiceDTO toDTO(QuizChoice quizChoice);
}
