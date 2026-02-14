package com.subject.subject.repositories;

import com.subject.subject.entities.Exam;
import com.subject.subject.generics.GenericRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamRepository extends GenericRepository<Exam> {
}
