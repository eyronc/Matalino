package com.example.user_service.services;


import com.example.user_service.dtos.UserDTO;
import com.example.user_service.dtos.UserRequest;
import com.example.user_service.entity.User;
import com.example.user_service.repos.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository)
    {
        this.repository = repository;
    }
    public void createUser(UserRequest user) {
        repository.save(User.builder()
                .username(user.username())
                .firstName(user.firstName())
                .lastName(user.lastName())
                .email(user.email())
                .password(user.password())
                .contactNumber(user.contactNumber())
                .build());
    }

    public UserDTO getUser(int id) {
        return repository.findUserById(id);
    }
}
