package com.google.keepnote.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.keepnote.exception.UserAlreadyExistsException;
import com.google.keepnote.exception.UserNotFoundException;
import com.google.keepnote.model.User;
import com.google.keepnote.service.UserAuthenticationService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/*
 * As in this assignment, we are working on creating RESTful web service, hence annotate
 * the class with @RestController annotation. A class annotated with the @Controller annotation
 * has handler methods which return a view. However, if we use @ResponseBody annotation along
 * with @Controller annotation, it will return the data directly in a serialized 
 * format. Starting from Spring 4 and above, we can use @RestController annotation which 
 * is equivalent to using @Controller and @ResposeBody annotation
 */
@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
public class UserAuthenticationController {

	private static final Logger logger = LoggerFactory.getLogger(UserAuthenticationController.class);
	private static final long EXPIRATION_TIME = 100_00_000;
	private UserAuthenticationService authicationService;

	public UserAuthenticationController(UserAuthenticationService authicationService) {
		this.authicationService = authicationService;
	}

	/*
	 * Define a handler method which will create a specific user by reading the
	 * Serialized object from request body and save the user details in the
	 * database. This handler method should return any one of the status messages
	 * basis on different situations: 1. 201(CREATED) - If the user created
	 * successfully. 2. 409(CONFLICT) - If the userId conflicts with any existing
	 * user
	 * 
	 * This handler method should map to the URL "/api/v1/auth/register" using HTTP
	 * POST method
	 */
	@PostMapping("/api/v1/auth/register")
	public ResponseEntity<?> createUser(@RequestBody User user) {

		try {
			Map<String, String> map = new HashMap<String, String>();
			logger.info("create method execution started");
			user.setUserAddedDate(new Date());
			authicationService.saveUser(user);
			map.put(user.getUserId(), "Sucessfully registred");
			return new ResponseEntity<>(map, HttpStatus.CREATED);

		} catch (UserAlreadyExistsException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
		}

	}

	/*
	 * Define a handler method which will authenticate a user by reading the
	 * Serialized user object from request body containing the username and
	 * password. The username and password should be validated before proceeding
	 * ahead with JWT token generation. The user credentials will be validated
	 * against the database entries. The error should be return if validation is not
	 * successful. If credentials are validated successfully, then JWT token will be
	 * generated. The token should be returned back to the caller along with the API
	 * response. This handler method should return any one of the status messages
	 * basis on different situations: 1. 200(OK) - If login is successful 2.
	 * 401(UNAUTHORIZED) - If login is not successful
	 * 
	 * This handler method should map to the URL "/api/v1/auth/login" using HTTP
	 * POST method
	 */

	@PostMapping("/api/v1/auth/login")
	public ResponseEntity<?> validateUser(@RequestBody User user) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			authicationService.findByUserIdAndPassword(user.getUserId(), user.getUserPassword());
			map.put("token", getToken(user.getUserId()));
			map.put("message", "Successfully Logged in");
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (UserNotFoundException e) {
			return new ResponseEntity<>("User details not found", HttpStatus.UNAUTHORIZED);
		} catch (Exception e) {
			return new ResponseEntity<>("Server down..please try after some", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// This method will Generate JWT token for valid user
	private String getToken(String userID) throws Exception {

		return Jwts.builder().setSubject(userID).setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS256, "secretKey").compact();
	}

}
