package com.subject.subject.generics;

import java.util.List;

public interface GenericService<T,V> {
    void add(T toAdd);
    void delete(int delete);
    V get(int id);
    List<V> getAll();
}
