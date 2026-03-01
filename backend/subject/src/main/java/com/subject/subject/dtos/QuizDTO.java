package com.subject.subject.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizDTO {
    private String instruction;
    private int timeLimit;
    List<LessonQuizDTO> lessonQuizzes;
}
