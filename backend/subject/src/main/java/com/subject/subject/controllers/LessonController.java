package com.subject.subject.controllers;

import com.subject.subject.dtos.LessonDTO;
import com.subject.subject.generics.GenericController;
import com.subject.subject.services.LessonServiceImp;
import com.subject.subject.views.LessonView;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lessons/")
public class LessonController extends GenericController<LessonDTO> {

    public LessonController(LessonServiceImp lessonService) {
        super(lessonService);
    }

}
