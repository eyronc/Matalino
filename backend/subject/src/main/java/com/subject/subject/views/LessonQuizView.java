package com.subject.subject.views;


import java.util.List;

public interface LessonQuizView {
    QuizView getQuiz();
    String getQuestion();
    String getAnswer();
    String getImage();
    List<QuizChoicesView> getQuizChoices();
}
