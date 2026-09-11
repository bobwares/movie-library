package com.bobwares.movielibrary;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;

class MovieLibraryApplicationTest {

    @Test
    void applicationCanBeConfigured() {
        var application = new SpringApplication(MovieLibraryApplication.class);

        assertThat(application).isNotNull();
    }
}
