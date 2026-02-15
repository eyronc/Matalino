package com.subject.subject.maps;

import com.subject.subject.dtos.LessonQuizDTO;
import com.subject.subject.dtos.QuizDTO;
import com.subject.subject.entities.Lesson;
import com.subject.subject.entities.LessonQuiz;
import com.subject.subject.entities.Quiz;
import com.subject.subject.entities.QuizChoice;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring", uses = {LessonQuizMapper.class})
public abstract class QuizMapper {
    public abstract Quiz dtoToEntity(QuizDTO dto);
    public abstract QuizDTO entityToDTO(Quiz dto);
    public abstract List<QuizDTO> entityToDtoList(List<Quiz> quizList);

    @AfterMapping
    public void setRelationship(@MappingTarget Quiz quiz)
    {
        if(quiz != null && quiz.getLessonQuizzes() != null)
        {
            for(LessonQuiz lesson : quiz.getLessonQuizzes()) {
                lesson.setQuiz(quiz);
                for(QuizChoice choice : lesson.getQuizChoices()) {
                    choice.setLessonQuiz(lesson);
                }
            }
        }
    }

}
