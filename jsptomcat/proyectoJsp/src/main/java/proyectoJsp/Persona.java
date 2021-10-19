package proyectoJsp;

public class Persona {
	
	
	
	private String nombre;
	private String dni;
	private int edad;
	
	
	
	public Persona() {
		
	}
	
	

	public String getNombre() {
		return nombre;
	}

	public String getDni() {
		return dni;
	}

	public int getEdad() {
		return edad;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}



	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", dni=" + dni + ", edad=" + edad + "]";
	}
	
	
	
	
	
	
	
	
	
	

}
