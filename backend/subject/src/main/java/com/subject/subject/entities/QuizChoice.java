package com.subject.subject.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "quiz_choices")
@Data
public class QuizChoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String choice;

    @ManyToOne
    @JoinColumn(name = "lesson_quiz_id")
    @JsonBackReference
    private LessonQuiz lessonQuiz;
}
