package com.dss.backend_loja;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(
    title = "Digital Store API",
    version = "1.0",
    description = "API para o e-commerce Digital Store, projeto final do curso."
))
public class BackendLojaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendLojaApplication.class, args);
	}

}
