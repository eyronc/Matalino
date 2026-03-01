package com.subject.subject.generics;

import java.util.List;

public interface GenericService<DTO> {
    void add(DTO toAdd);
    void delete(int delete);
    DTO get(int id) throws Exception;
    List<DTO> getAll();
}
