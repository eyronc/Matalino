package com.example.user_service;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
class AuthController {

    private final AuthService authService;
    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("add")
    public void addUser(@RequestBody UserRequest userRequest) {
        authService.addUser(userRequest);
    }
    @GetMapping("get")
    public List<UserDTO> getUsers() {
        return authService.getAllUsers();
    }

    @GetMapping("user-subjects/{id}")
    public UserDTO getUserSubjects(@PathVariable int id) {
        return authService.getUserSubjects(id);
    }

}
