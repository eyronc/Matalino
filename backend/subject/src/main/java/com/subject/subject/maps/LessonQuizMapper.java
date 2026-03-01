package com.subject.subject.maps;

import com.subject.subject.dtos.LessonQuizDTO;
import com.subject.subject.entities.LessonQuiz;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {QuizChoiceMapper.class})
public interface LessonQuizMapper {
    public LessonQuiz dtoToEntity(LessonQuizDTO lessonQuizDTO);
    public LessonQuizDTO entityToDto(LessonQuiz lessonQuiz);

    public List<LessonQuizDTO> entityToDtoList(List<LessonQuiz> lessonQuizList);
}
