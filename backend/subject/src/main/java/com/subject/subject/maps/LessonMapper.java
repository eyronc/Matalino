package com.subject.subject.maps;

import com.subject.subject.dtos.LessonDTO;
import com.subject.subject.entities.Lesson;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring", uses = {QuizMapper.class})
public abstract class LessonMapper {
    public abstract Lesson dtoToEntity(LessonDTO dto);
    public abstract LessonDTO entityToDto(Lesson dto);

    public abstract List<LessonDTO>  entityToDtoList(List<Lesson> dtoList);

    @AfterMapping
    public void setRelationship(@MappingTarget Lesson lesson)
    {
        if(lesson != null && lesson.getQuiz() != null)
            lesson.getQuiz().setLesson(lesson);
    }

}
