package com.google.keepnote.service;

import com.google.keepnote.exception.UserAlreadyExistsException;
import com.google.keepnote.exception.UserNotFoundException;
import com.google.keepnote.model.User;

public interface UserAuthenticationService {

	/*
	 * Should not modify this interface. You have to implement these methods in
	 * corresponding Impl classes
	 */

	User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;

	boolean saveUser(User user) throws UserAlreadyExistsException;
}
