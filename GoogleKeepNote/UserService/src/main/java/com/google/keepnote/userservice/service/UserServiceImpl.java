package com.google.keepnote.userservice.service;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.google.keepnote.userservice.exceptions.UserAlreadyExistsException;
import com.google.keepnote.userservice.exceptions.UserNotFoundException;
import com.google.keepnote.userservice.model.User;
import com.google.keepnote.userservice.repository.UserRepository;

/*
* Service classes are used here to implement additional business logic/validation 
* This class has to be annotated with @Service annotation.
* @Service - It is a specialization of the component annotation. It doesn't currently 
* provide any additional behavior over the @Component annotation, but it's a good idea 
* to use @Service over @Component in service-layer classes because it specifies intent 
* better. Additionally, tool support and additional behavior might rely on it in the 
* future.
* */
@Service
public class UserServiceImpl implements UserService {

	/*
	 * Autowiring should be implemented for the UserRepository. (Use
	 * Constructor-based autowiring) Please note that we should not create any
	 * object using the new keyword.
	 */
	@Autowired
	private UserRepository userrepository;

	public UserServiceImpl(UserRepository userrepository) {
		this.userrepository = userrepository;
	}

	/**
	 * This method will used to register new user
	 */
	public User registerUser(User user) throws UserAlreadyExistsException {

		Optional<User> existingUserDetails = userrepository.findById(user.getUserId());
		if (!existingUserDetails.isPresent()) {
			user.setUserAddedDate(new Date());
			User registeredUser = userrepository.insert(user);
			if (Objects.isNull(registeredUser))
				throw new UserAlreadyExistsException("User already exists ");
			else
				return registeredUser;
		} else {
			throw new UserAlreadyExistsException("User already exists ");
		}
	}

	/**
	 * This method will used to to update user details by its id
	 */

	public User updateUser(String userId, User user) throws UserNotFoundException {
		try {
			User existingUser = getUserById(userId);
			userrepository.delete(existingUser);
			user = userrepository.insert(user);
		} catch (UserNotFoundException e) {
			return null;
		}
		return user;
	}

	/**
	 * This method will used to delete particular user by its id
	 */
	public boolean deleteUser(String userId) throws UserNotFoundException {
		Optional<User> existingUserDetails = userrepository.findById(userId);
		if (!existingUserDetails.isPresent()) {
			throw new UserNotFoundException("User does not exists with this Id " + userId);
		}
		userrepository.deleteById(userId);
		return true;
	}

	/**
	 * This method will give details of particular user by its id
	 */
	public User getUserById(String userId) throws UserNotFoundException {
		Optional<User> userDetail = userrepository.findById(userId);
		if (!userDetail.isPresent()) {
			throw new UserNotFoundException("User does not exists with this Id " + userId);
		}
		return userDetail.get();
	}

	/**
	 * This method will give all user details
	 * 
	 * @return
	 * @throws UserNotFoundException
	 */
	public List<User> getAllUsers() throws UserNotFoundException {
		List<User> userDetailsList = userrepository.findAll();
		if (CollectionUtils.isEmpty(userDetailsList)) {
			throw new UserNotFoundException("User details not found");
		} else {
			return userDetailsList;
		}
	}

}
