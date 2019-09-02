package com.google.keepnote.reminderservice.service;

import java.util.List;

import com.google.keepnote.reminderservice.exception.ReminderNotCreatedException;
import com.google.keepnote.reminderservice.exception.ReminderNotFoundException;
import com.google.keepnote.reminderservice.model.Reminder;

public interface ReminderService {
	
	/*
	 * Should not modify this interface. You have to implement these methods in
	 * corresponding Impl classes
	 */

    Reminder createReminder(Reminder reminder) throws ReminderNotCreatedException;
    
    Reminder saveReminder(Reminder reminder) throws ReminderNotCreatedException;

    boolean deleteReminder(String reminderId) throws ReminderNotFoundException;

    Reminder updateReminder(Reminder reminder, String reminderId) throws ReminderNotFoundException;

    Reminder getReminderById(String reminderId) throws ReminderNotFoundException;

    List<Reminder> getAllReminders();
}
