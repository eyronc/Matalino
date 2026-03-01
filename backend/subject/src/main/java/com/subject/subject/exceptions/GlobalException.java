package com.subject.subject.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(SubjectException.class)
    public ResponseEntity<String> handleSubjectException(SubjectException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }

}
