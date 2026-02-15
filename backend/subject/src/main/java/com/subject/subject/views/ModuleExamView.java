package com.subject.subject.views;

import java.util.List;

public interface ModuleExamView {
    ExamView getExam();
    String getQuestion();
    String getAnswer();
    String getImage();
    List<ModuleExamChoicesView> getModuleExamChoices();
}
