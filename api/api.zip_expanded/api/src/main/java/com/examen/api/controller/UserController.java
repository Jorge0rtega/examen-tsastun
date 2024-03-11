package com.examen.api.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.examen.api.entity.User;
import com.examen.api.services.UserServiceImpl;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping(path = "/api")
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	
	//todos los usuarios
	@GetMapping("/user") 
	public List<User> index(){
		return userService.findAll();
	}
	
	//busqueda por nombre
	@GetMapping("/user/{nombre}") 
	public List<User> userNombre(@PathVariable("nombre") String nombre) {
		//System.out.print("correo ->"+correo);
		List<User> user = userService.findByNombre(nombre);
		return user;
	}
	
	//crear user
	@PostMapping("/user") // Registrar Conductor
	@ResponseStatus(HttpStatus.CREATED)
	public User UserCrear(@RequestBody Map<String, Object> data) {
		User user= new User();
		user.setArea((String)data.get("area"));
		user.setNombre((String)data.get("nombre"));
		//conductor.setIdConductor(Long.parseLong((String)data.get("idConductor")));
		user.setDireccion((String)data.get("direccion"));
		user.setEdad((String)data.get("edad"));
		user.setRol((String)data.get("rol"));
		user.setTelefono((String)data.get("telefono"));
		user.setUsername((String)data.get("username"));
		return userService.save(user);
	}
	
	@PutMapping("/user/{id}")//actualizar conductor
	public ResponseEntity<User> userModificar(@RequestBody User user, @PathVariable("id") Long id) {
	    User userEncontrado = userService.findById(id);
	    
	    if (userEncontrado != null ) {
	    	userEncontrado.setNombre(user.getNombre());
	    	userEncontrado.setArea(user.getArea());
	    	userEncontrado.setDireccion(user.getDireccion());
	    	userEncontrado.setEdad(user.getEdad());
	    	userEncontrado.setTelefono(user.getTelefono());
	    	userEncontrado.setRol(user.getRol());
	    	userEncontrado.setTelefono(user.getTelefono());
	    	userEncontrado.setUsername(user.getUsername());
	    	userService.save(userEncontrado);
	        return ResponseEntity.ok(userEncontrado);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
	@DeleteMapping("/user/{id}")
	public HttpStatus userEliminar(@PathVariable Long id){
		User userEncontrado = userService.findById(id);

        // Si el usuario no se encuentra, devuelve NOT_FOUND
        if (userEncontrado == null) {
        	return HttpStatus.NOT_FOUND;
        }
        
        // Elimina el usuario encontrado
        if(userService.deleteUser(userEncontrado)) {
        	return HttpStatus.OK;
        }else {
        	return HttpStatus.NOT_FOUND;
        }
        
	}
}
