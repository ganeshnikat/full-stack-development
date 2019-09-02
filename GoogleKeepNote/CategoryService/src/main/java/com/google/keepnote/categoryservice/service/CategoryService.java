package com.google.keepnote.categoryservice.service;

import java.util.List;

import com.google.keepnote.categoryservice.exception.CategoryDoesNoteExistsException;
import com.google.keepnote.categoryservice.exception.CategoryNotCreatedException;
import com.google.keepnote.categoryservice.exception.CategoryNotFoundException;
import com.google.keepnote.categoryservice.model.Category;

public interface CategoryService {

	/*
	 * Should not modify this interface. You have to implement these methods in
	 * corresponding Impl classes
	 */

	Category createCategory(Category category) throws CategoryNotCreatedException;

	boolean deleteCategory(String categoryId) throws CategoryDoesNoteExistsException;

	Category updateCategory(Category category, String categoryId);

	Category getCategoryById(String categoryId) throws CategoryNotFoundException;

	List<Category> getAllCategoryByUserId(String userId);

}
