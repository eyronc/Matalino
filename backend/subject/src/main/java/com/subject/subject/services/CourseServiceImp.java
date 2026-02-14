package com.subject.subject.services;

import com.subject.subject.entities.Course;
import com.subject.subject.dtos.CourseDTO;
import com.subject.subject.generics.GenericService;
import com.subject.subject.maps.CourseMapper;
import com.subject.subject.repositories.CourseRepository;
import com.subject.subject.views.CourseView;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CourseServiceImp implements GenericService<CourseDTO, CourseView> {

    private final CourseRepository repository;
    private final CourseMapper mapper;

    public CourseServiceImp(CourseRepository repository,  CourseMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
    @Override
    public void add(CourseDTO toAdd) {
        repository.save(mapper.dtoToEntity(toAdd));
    }

    @Override
    public void delete(int delete) {

    }

    @Override
    public CourseView get(int id) {
        return null;
    }

    @Override
    public List<CourseView> getAll() {
        return List.of();
    }
}
