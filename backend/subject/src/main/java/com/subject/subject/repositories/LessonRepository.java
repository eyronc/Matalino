package com.subject.subject.repositories;

import com.subject.subject.generics.GenericRepository;
import com.subject.subject.entities.Lesson;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepository extends GenericRepository<Lesson> {
}
