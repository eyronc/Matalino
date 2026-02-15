package com.subject.subject.generics;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


public class GenericController <DTO> {
    private final GenericService<DTO> service;

    public GenericController(GenericService<DTO> service) {
        this.service = service;
    }
    @GetMapping("/greet")
    public  String greeting()
    {
        return "Hello World!";
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(@Valid @RequestBody DTO request) {
        service.add(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable int id) {
        service.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public DTO get(@PathVariable int id) throws Exception {
        return service.get(id);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<DTO> getAll() {
        return service.getAll();
    }
}
