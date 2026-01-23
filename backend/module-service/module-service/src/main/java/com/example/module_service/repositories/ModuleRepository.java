package com.example.module_service.repositories;

import com.example.module_service.dtos.ModuleDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.module_service.entity.Module;

import java.util.List;

@Repository
public interface ModuleRepository extends JpaRepository<Module, Integer> {
    List<ModuleDTO> findAllBySubjectId(Integer id);
}
