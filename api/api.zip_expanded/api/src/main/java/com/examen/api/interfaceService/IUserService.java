package com.examen.api.interfaceService;

import java.util.List;

import com.examen.api.entity.User;

public interface IUserService {
	public List<User> findAll();
	public List<User> findByNombre(String nombre);
	public User findById(long id);
	
	public User save(User user);
	
}
