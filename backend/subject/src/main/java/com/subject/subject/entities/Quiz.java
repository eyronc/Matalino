package com.subject.subject.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "quizzes")
@Data
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String instruction;
    private int timeLimit;

    @OneToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<LessonQuiz> lessonQuizzes = new ArrayList<>();

    public void addLessonQuiz(LessonQuiz lessonQuiz) {
        lessonQuizzes.add(lessonQuiz);
        lessonQuiz.setQuiz(this);
    }
}
