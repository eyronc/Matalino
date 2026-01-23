package com.example.user_service.controllers;

import com.example.user_service.dtos.UserDTO;
import com.example.user_service.dtos.UserRequest;
import com.example.user_service.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users/")
class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }
    @PostMapping("create-user")
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody UserRequest user) {
        service.createUser(user);
    }
    @GetMapping("get-user/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserDTO getUser(@PathVariable int id) {
        return service.getUser(id);
    }

}
