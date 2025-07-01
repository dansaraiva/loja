package com.dss.backend_loja.service;

import com.dss.backend_loja.entity.Product;
import com.dss.backend_loja.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Product findProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado com o id: " + id));
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product existingProduct = findProductById(id);

        existingProduct.setName(productDetails.getName());
        existingProduct.setDescription(productDetails.getDescription());
        existingProduct.setPrice(productDetails.getPrice());
        existingProduct.setImageUrl(productDetails.getImageUrl());
        existingProduct.setStockQuantity(productDetails.getStockQuantity());

        return productRepository.save(existingProduct);
    }

    public void deleteProduct(Long id) {
        Product productToDelete = findProductById(id);
        productRepository.delete(productToDelete);
    }
}
