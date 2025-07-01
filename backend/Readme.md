# Digital Store - Backend

API REST para o e-commerce Digital Store, desenvolvida como parte do projeto final do curso de backend. A API gerencia o cadastro e a manipulação de produtos.

## Requisitos

Para executar este projeto, você precisará ter instalado em sua máquina:

-   [Java (JDK) 17 ou superior](https://www.oracle.com/java/technologies/downloads/)
-   [Apache Maven 3.8 ou superior](https://maven.apache.org/download.cgi)

## Como Executar

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento local.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/
    ```

2.  **Navegue até o diretório do backend:**
    ```bash
    cd projeto-backend/backend
    ```

3.  **Execute a aplicação com o Maven:**
    ```bash
    mvn spring-boot:run
    ```

A aplicação estará disponível em `http://localhost:8080`.

## Documentação da API (Swagger)

A documentação completa e interativa da API foi gerada com Springdoc (Swagger) e pode ser acessada no seguinte endereço após iniciar a aplicação:

-   **URL:** [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

Nesta página, você pode visualizar todos os endpoints, seus parâmetros, e testá-los diretamente do navegador.

## Banco de Dados (H2 Console)

Para o ambiente de desenvolvimento, a aplicação utiliza um banco de dados H2 em memória. Você pode acessar o console web do H2 para visualizar as tabelas e executar queries SQL.

-   **URL do Console:** [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
-   **JDBC URL:** `jdbc:h2:mem:testdb` (use este valor no campo "JDBC URL")
-   **Username:** `sa`
-   **Password:** (deixe em branco)

## Endpoints da API

A URL base para todos os endpoints é `http://localhost:8080/api`.

### Produtos (`/products`)

| Verbo  | Endpoint             | Descrição                               |
| :----- | :------------------- | :-------------------------------------- |
| `GET`  | `/products`          | Lista todos os produtos cadastrados.    |
| `GET`  | `/products/{id}`     | Busca um produto específico pelo seu ID.|
| `POST` | `/products`          | Cria um novo produto.                   |
| `PUT`  | `/products/{id}`     | Atualiza um produto existente.          |
| `DELETE`| `/products/{id}`    | Deleta um produto.                      |

## Tecnologias Utilizadas

-   **Java 21**: Linguagem de programação principal.
-   **Spring Boot**: Framework para criação de aplicações web e APIs REST.
-   **Spring Data JPA / Hibernate**: Para persistência de dados e mapeamento objeto-relacional.
-   **Maven**: Ferramenta de gerenciamento de dependências e build.
-   **H2 Database**: Banco de dados em memória para desenvolvimento.
-   **Flyway**: Ferramenta para versionamento e migração de banco de dados.
-   **Springdoc-openapi (Swagger)**: Para documentação automática da API.
-   **Lombok**: Para reduzir código boilerplate (getters, setters, construtores).