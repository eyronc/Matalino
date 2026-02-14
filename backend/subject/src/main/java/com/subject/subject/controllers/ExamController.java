package com.subject.subject.controllers;

import com.subject.subject.dtos.ExamDTO;
import com.subject.subject.generics.GenericController;
import com.subject.subject.services.ExamServiceImp;
import com.subject.subject.views.ExamView;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/exams")
public class ExamController extends GenericController<ExamDTO, ExamView> {

    public  ExamController(ExamServiceImp examService) {
        super(examService);
    }

}
