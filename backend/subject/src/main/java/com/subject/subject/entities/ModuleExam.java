package com.subject.subject.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "moduleExams")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleExam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JoinColumn(name="exam_id")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    private Exam exam;

    private String question;
    private String answer;
    private String image;

    @OneToMany(mappedBy = "moduleExam", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ModuleExamChoice> moduleExamChoices = new ArrayList<>();

    public void addModuleExamChoice(ModuleExamChoice moduleExamChoice) {
        moduleExamChoices.add(moduleExamChoice);
        moduleExamChoice.setModuleExam(this);
    }
}
