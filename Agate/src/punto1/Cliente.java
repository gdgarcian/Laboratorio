package punto1;

import java.util.HashMap;

public class Cliente{
	
	private String nombre;
	private String direccion;
	private String telefono;
	private String e_mail;	
	
	private Contacto contacto;
	private HashMap<String, Proyecto> proyectos;
	
	public Cliente(String nombre, String direccion, String telefono, String e_mail, Contacto contacto,
			HashMap<String, Proyecto> proyectos) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefono = telefono;
		this.e_mail = e_mail;
		this.contacto = contacto;
		this.proyectos = proyectos;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getE_mail() {
		return e_mail;
	}
	public void setE_mail(String e_mail) {
		this.e_mail = e_mail;
	}
	public Contacto getContacto() {
		return contacto;
	}
	public void setContacto(Contacto contacto) {
		this.contacto = contacto;
	}
	public HashMap<String, Proyecto> getProyectos() {
		return proyectos;
	}
	public void setProyectos(HashMap<String, Proyecto> proyectos) {
		this.proyectos = proyectos;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Nombre: "+nombre+"\n"+
				"Direccion: "+direccion+"\n"+
				"Teléfono: "+telefono+"\n"+
				"e-mail: "+e_mail+"\n"+
				"Contacto: "+contacto.getNombre()+"\n\n";
	}
	
	
	
}
