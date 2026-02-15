package com.subject.subject.controllers;

import com.subject.subject.dtos.QuizDTO;
import com.subject.subject.generics.GenericController;
import com.subject.subject.services.QuizServiceImp;
import com.subject.subject.views.QuizView;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quizzes/")
public class QuizController extends GenericController<QuizDTO> {

    public QuizController(QuizServiceImp quizService) {
        super(quizService);
    }

}
