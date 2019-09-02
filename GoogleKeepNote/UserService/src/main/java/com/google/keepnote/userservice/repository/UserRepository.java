package com.google.keepnote.userservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.google.keepnote.userservice.model.User;

/*
* This class is implementing the MongoRepository interface for User.
* Annotate this class with @Repository annotation
* */

public interface UserRepository extends MongoRepository<User, String> {

}
