package com.google.keepnote.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class KeepNoteEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(KeepNoteEurekaServerApplication.class, args);
	}

}
