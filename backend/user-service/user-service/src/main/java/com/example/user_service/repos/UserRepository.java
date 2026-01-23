package com.example.user_service.repos;

import com.example.user_service.dtos.UserDTO;
import com.example.user_service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    UserDTO findUserById(int id);
}
