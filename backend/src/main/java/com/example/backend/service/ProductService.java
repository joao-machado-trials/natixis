package com.example.backend.service;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> findAll() {
        return repository.findAll();
    }

    public Product findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(id));
    }

    public Product create(Product product) {
        return repository.save(product);
    }

    public Product update(Long id, Product updatedProduct) {

        Product existing = findById(id);

        existing.setName(updatedProduct.getName());
        existing.setPrice(updatedProduct.getPrice());
        existing.setStock(updatedProduct.getStock());

        return repository.save(existing);
    }

    public void delete(Long id) {

        Product product = findById(id);

        repository.delete(product);
    }
}
