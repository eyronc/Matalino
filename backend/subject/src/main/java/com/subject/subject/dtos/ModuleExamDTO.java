package com.subject.subject.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleExamDTO {
    private String question;
    private String answer;
    private String image;
    private List<ModuleExamChoiceDTO> moduleExamChoices;
}
