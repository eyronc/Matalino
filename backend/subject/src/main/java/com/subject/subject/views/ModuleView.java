package com.subject.subject.views;

import java.util.List;

public interface ModuleView {
    CourseView getCourse();
    String getDescription();
    List<LessonView> getLessons();
    List<ModuleExamView> getModuleExams();
}
