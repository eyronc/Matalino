package com.subject.subject.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.engine.internal.Cascade;

@Entity
@Table(name = "moduleExamsChoices")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleExamChoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JoinColumn(name ="module_exam_id")
    @ManyToOne
    private ModuleExam moduleExam;
    private String choice;
}
