package com.google.keepnote.reminderservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.google.keepnote.reminderservice.model.Reminder;

/*
* This class is implementing the MongoRepository interface for User.
* Annotate this class with @Repository annotation
* */
@Repository
public interface ReminderRepository extends MongoRepository<Reminder, String> {

}
