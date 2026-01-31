package com.example.user_service;


import java.util.List;

public record UserDTO(int id, String username, List<SubjectDTO> subjectList) {

}
