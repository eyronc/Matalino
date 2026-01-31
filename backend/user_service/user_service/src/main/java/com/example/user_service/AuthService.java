package com.example.user_service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
class AuthService {

    private final AuthRepository authRepository;
    private final SubjectFeign subjectFeign;
    public AuthService(AuthRepository authRepository, SubjectFeign subjectFeign) {
        this.authRepository = authRepository;
        this.subjectFeign = subjectFeign;
    }

    public void addUser(UserRequest userRequest) {
        authRepository.save(User.builder()
                        .username(userRequest.username())
                        .password(userRequest.password())
                .build());
    }
    public List<UserDTO> getAllUsers() {
        return authRepository.findAll().stream().map(user -> new UserDTO(user.getId(), user.getUsername(),  null)).collect(Collectors.toList());
    }

    @CircuitBreaker(name = "userServiceBreaker", fallbackMethod = "userServiceFallBack")
    @Retry(name = "userServiceBreaker", fallbackMethod = "userServiceFallBack")
    public UserDTO getUserSubjects(int id) {
        User user = authRepository.findById(id).get();
        List <SubjectDTO> subjectDTOS = subjectFeign.getSubjects();
        return new UserDTO(user.getId(), user.getUsername(), subjectDTOS);
    }
    public UserDTO userServiceFallBack(int id) {
        return new UserDTO(0, "UNKNOWN", null);
    }


}
