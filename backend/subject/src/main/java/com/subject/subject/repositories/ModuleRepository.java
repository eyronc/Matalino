package com.subject.subject.repositories;

import com.subject.subject.generics.GenericRepository;
import org.springframework.stereotype.Repository;
import com.subject.subject.entities.Module;


@Repository
public interface ModuleRepository extends GenericRepository<Module> {
}
