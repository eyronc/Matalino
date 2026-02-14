package com.subject.subject.controllers;

import com.subject.subject.dtos.CourseDTO;
import com.subject.subject.generics.GenericController;
import com.subject.subject.services.CourseServiceImp;
import com.subject.subject.views.CourseView;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/courses")
public class CourseController extends GenericController<CourseDTO,CourseView> {

    public CourseController(CourseServiceImp courseService) {
        super(courseService);
    }

}

