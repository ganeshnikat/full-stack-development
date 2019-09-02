package com.google.keepnote.noteservice.service;

import java.util.List;

import com.google.keepnote.noteservice.exception.NoteNotFoundExeption;
import com.google.keepnote.noteservice.model.Note;

public interface NoteService {

	/*
	 * Should not modify this interface. You have to implement these methods in
	 * corresponding Impl classes
	 */

	boolean createNote(Note note);

	boolean deleteNote(String userId, int noteId);

	boolean deleteAllNotes(String userId) throws NoteNotFoundExeption;

	Note updateNote(Note note, int id, String userId) throws NoteNotFoundExeption;

	Note getNoteByNoteId(String userId, int noteId) throws NoteNotFoundExeption;

	List<Note> getAllNoteByUserId(String userId);

}
