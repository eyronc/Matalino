package com.subject.subject.repositories;

import com.subject.subject.generics.GenericRepository;
import com.subject.subject.entities.Quiz;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends GenericRepository<Quiz> {
}
