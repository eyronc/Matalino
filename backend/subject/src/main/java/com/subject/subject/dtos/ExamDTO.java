package com.subject.subject.dtos;

import com.subject.subject.entities.ModuleExam;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamDTO {
    private String instruction;
    private int timeLimit;
    private List<ModuleExamDTO> moduleExams;
}
