package com.subject.subject.maps;

import com.subject.subject.dtos.LessonQuizDTO;
import com.subject.subject.entities.LessonQuiz;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {QuizChoiceMapper.class})
public interface LessonQuizMapper {
    public LessonQuiz dtoToEntity(LessonQuizDTO lessonQuizDTO);
    public LessonQuizDTO entityToDto(LessonQuiz lessonQuiz);
}
