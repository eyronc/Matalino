package com.example.subject_service.services;

import com.example.subject_service.dtos.SubjectDTO;
import com.example.subject_service.dtos.SubjectRequest;
import com.example.subject_service.entity.Subject;
import com.example.subject_service.repo.SubjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    private final SubjectRepository subjectRepository;

    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }
    public void createSubject(SubjectRequest lesson) {
        subjectRepository.save(Subject.builder()
                        .name(lesson.name())
                .description(lesson.description())
                .build());
    }

    public SubjectDTO getSubject(int id) {
        return subjectRepository.findSubjectById(id);
    }
    public List<SubjectDTO> getSubjects() {
        return  subjectRepository.findAllBy();
    }
}
