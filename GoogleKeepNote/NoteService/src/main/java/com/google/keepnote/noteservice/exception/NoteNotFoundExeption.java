package com.google.keepnote.noteservice.exception;

public class NoteNotFoundExeption extends Exception {
   
	private static final long serialVersionUID = 1L;

	public NoteNotFoundExeption(String message) {
        super(message);
    }
}
