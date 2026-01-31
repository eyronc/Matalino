package com.example.user_service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.user_service.User;

@Repository
interface AuthRepository extends JpaRepository<User, Integer> {
}
