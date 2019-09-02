package com.google.keepnote.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.google.keepnote.model.User;

public interface UserAutheticationRepository extends JpaRepository<User, String> {

	/*
	 * Apart from the standard CRUD methods already available in JPA Repository,
	 * based on our requirements, we might need to create few query methods for
	 * getting specific data from the database.
	 */

	User findByUserIdAndUserPassword(String userId, String userPassword);
}
