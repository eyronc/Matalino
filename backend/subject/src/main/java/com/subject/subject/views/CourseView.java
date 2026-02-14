package com.subject.subject.views;

import java.util.List;

public interface CourseView {

    String getCourseName();
    String getDescription();
    List<ModuleView> getModules();

}
