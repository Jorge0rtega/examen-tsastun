package com.examen.api.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class UserDTO {
	@JsonProperty("idUser")
    private Long idUser;
    @JsonProperty("nombre")
    private String nombre;
    @JsonProperty("username")
    private String username;
    @JsonProperty("edad")
    private String edad;
    @JsonProperty("telefono")
    private String telefono;
    @JsonProperty("direccion")
    private String direccion;
    @JsonProperty("rol")
    private String rol;
    @JsonProperty("area")
    private String area;
    
    public UserDTO(Long idUser, String nombre, String username, String edad, String telefono, 
    		String direccion, String rol, String area) {
    	super();
    	this.idUser=idUser;
    	this.nombre=nombre;
    	this.username=username;
    	this.edad=edad;
    	this.telefono=telefono;
    	this.direccion=direccion;
    	this.rol=rol;
    	this.area=area;
    }
    
}
