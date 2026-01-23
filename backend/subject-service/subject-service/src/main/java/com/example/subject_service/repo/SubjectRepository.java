package com.example.subject_service.repo;

import com.example.subject_service.dtos.SubjectDTO;
import com.example.subject_service.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    SubjectDTO findSubjectById(int id);
    List<SubjectDTO> findAllBy();
}
