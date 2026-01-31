package com.example.user_service;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "lesson-service")
public interface SubjectFeign {

    @GetMapping("/all")
    public List<SubjectDTO> getSubjects();
}
