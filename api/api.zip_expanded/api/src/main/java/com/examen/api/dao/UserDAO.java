package com.examen.api.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.examen.api.entity.User;

public interface UserDAO extends CrudRepository<User, Long> {
	User deleteById(long id);
	
	List<User> findAll();
	List<User> findByNombre(String nombre);
	User findById(long id);
	
}
