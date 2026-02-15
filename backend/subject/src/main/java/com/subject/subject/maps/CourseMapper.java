package com.subject.subject.maps;

import com.subject.subject.entities.Course;
import com.subject.subject.dtos.CourseDTO;
import com.subject.subject.entities.Lesson;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import com.subject.subject.entities.Module;

import java.util.List;

@Mapper(componentModel = "spring", uses = {ModuleMapper.class})
public abstract class CourseMapper {
    public abstract Course dtoToEntity(CourseDTO courseDTO);
    public abstract CourseDTO entityToDto(Course course);

    public abstract  List<CourseDTO> entityToDTOList(List<Course> courseList);

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
