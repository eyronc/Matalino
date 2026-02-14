package com.subject.subject.maps;

import com.subject.subject.entities.Course;
import com.subject.subject.dtos.CourseDTO;
import com.subject.subject.entities.Lesson;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import com.subject.subject.entities.Module;

@Mapper(componentModel = "spring", uses = {ModuleMapper.class})
public abstract class CourseMapper {
    public abstract Course dtoToEntity(CourseDTO courseDTO);
    public abstract CourseDTO entityToDto(Course course);

    @AfterMapping
    public void setRelationShip(@MappingTarget Course course){
        if(course != null){
            if(course.getModules() != null){
                for(Module module : course.getModules()) {
                    module.setCourse(course);
                    if(module.getLessons() != null){
                        for(Lesson lesson : module.getLessons()) {
                            lesson.setModule(module);
                        }
                    }
                }
            }
        }
    }
}
