package com.subject.subject.generics;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


public class GenericController <REQ,RES> {
    private final GenericService<REQ, RES> service;

    public GenericController(GenericService<REQ, RES> service) {
        this.service = service;
    }
    @GetMapping("/greet")
    public String greeting()
    {
        return "Hello World!";
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(@Valid @RequestBody REQ request) {
        service.add(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable int id) {
        service.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RES get(@PathVariable int id) {
        return service.get(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<RES> getAll() {
        return service.getAll();
    }
}
