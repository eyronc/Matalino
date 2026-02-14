//package com.subject.subject.configs;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@EnableWebSecurity
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf(csrf -> csrf.disable()) // Disable CSRF for H2 console
//                .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin())) // Allow frames
//                .authorizeHttpRequests(auth -> {
//                    auth.requestMatchers("/h2-console/**").permitAll(); // Allow H2 console
//                    auth.anyRequest().authenticated();
//                });
//
//        return http.build();
//    }
//}
