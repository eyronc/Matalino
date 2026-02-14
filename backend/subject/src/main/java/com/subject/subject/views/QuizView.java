package com.subject.subject.views;

import java.util.List;

public interface QuizView {
    LessonView getLesson();
    int getTimeLimit();
    List<LessonQuizView> getLessonQuiz();
}
