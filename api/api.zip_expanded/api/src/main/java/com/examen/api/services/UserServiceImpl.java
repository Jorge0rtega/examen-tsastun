package com.examen.api.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.examen.api.dao.UserDAO;
import com.examen.api.entity.User;
import com.examen.api.interfaceService.IUserService;

@Service
public class UserServiceImpl implements IUserService{
	
	@Autowired
	private UserDAO userDAO;
	
	
	@Override
	@Transactional(readOnly = true)
	public List<User> findAll(){
		return (List<User>)userDAO.findAll();
	}
	
	@Override
	@Transactional(readOnly = true)
	public List<User> findByNombre(String nombre) {
		return userDAO.findByNombre(nombre);
	}
	
	@Override
	@Transactional(readOnly = true)
	public User findById(long id) {
		return userDAO.findById(id);
	}
	
	@Override
	public User save(User user) {
		return userDAO.save(user);
	}
	
	public boolean deleteUser(User user) {
        if (userDAO.existsById(user.getIdUser())) {
        	userDAO.delete(user);
            return true;
        } else {
            return false;
        }
    }
}
