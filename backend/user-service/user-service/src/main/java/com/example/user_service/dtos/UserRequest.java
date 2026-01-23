package com.example.user_service.dtos;

public record UserRequest(String username,String firstName, String lastName ,String email, String password, String contactNumber) {
}
