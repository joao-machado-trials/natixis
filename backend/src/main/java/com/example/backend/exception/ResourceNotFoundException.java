package com.example.backend.exception;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(Long id) {
        super("Product not found with id: " + id);
    }
}
