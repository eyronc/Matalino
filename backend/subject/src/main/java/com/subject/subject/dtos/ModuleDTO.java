package com.subject.subject.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleDTO {
    private String moduleName;
    private String description;
    private List<LessonDTO> lessons;
    private ExamDTO exam;
}
