package com.google.keepnote.service;

import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.keepnote.exception.UserAlreadyExistsException;
import com.google.keepnote.exception.UserNotFoundException;
import com.google.keepnote.model.User;
import com.google.keepnote.repository.UserAutheticationRepository;

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
public class UserAuthenticationServiceImpl implements UserAuthenticationService {

	/*
	 * Autowiring should be implemented for the UserAuthenticationRepository. (Use
	 * Constructor-based autowiring) Please note that we should not create any
	 * object using the new keyword.
	 */
	@Autowired
	private UserAutheticationRepository userAuthenticationRepository;

	public UserAuthenticationServiceImpl(UserAutheticationRepository reposiroty) {
		this.userAuthenticationRepository = reposiroty;
	}

	@Override
	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException {

		User user = userAuthenticationRepository.findByUserIdAndUserPassword(userId, password);
		if (Objects.isNull(user))
			throw new UserNotFoundException("User not found");
		else
			return user;

	}

	@Override
	public boolean saveUser(User user) throws UserAlreadyExistsException {
		try {
			Optional<User> userdetails = userAuthenticationRepository.findById(user.getUserId());
			if (!userdetails.isPresent()) {
				userAuthenticationRepository.save(user);
				return true;
			} else {
				throw new UserAlreadyExistsException("User already Exists,Cannot Register User");
			}
		} catch (Exception e) {
			throw new UserAlreadyExistsException("User already Exists,Cannot Register User");
		}
	}
}
