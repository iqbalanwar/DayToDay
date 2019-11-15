package com.example.dayToDay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class DayToDayApplication {

	public static void main(String[] args) {
		SpringApplication.run(DayToDayApplication.class, args);
	}

}
