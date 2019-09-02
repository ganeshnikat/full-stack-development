package com.google.keepnote.reminderservice.exception;

public class ReminderNotFoundException extends Exception {
  
	private static final long serialVersionUID = 1L;

	public ReminderNotFoundException(String message) {
        super(message);
    }
}
