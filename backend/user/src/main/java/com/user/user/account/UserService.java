package com.user.user.account;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }
    public void registerCustomer(RegisterRequest registerRequest) {
        userRepository.save(User.builder()
                        .username(registerRequest.username())
                        .password(passwordEncoder.encode(registerRequest.password()))
                .build());
    }

}
