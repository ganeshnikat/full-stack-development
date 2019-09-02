package com.google.keepnote.noteservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.google.keepnote.noteservice.model.NoteUser;

/*
* This class is implementing the MongoRepository interface for Note.
* Annotate this class with @Repository annotation
* */

public interface NoteRepository extends MongoRepository<NoteUser, String> {

}
