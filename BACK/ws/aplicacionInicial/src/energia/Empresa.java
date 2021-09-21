package energia;

import java.util.HashSet;
import java.util.Iterator;

public class Empresa {
	
	private HashSet<AbsGenerador> listaGeneradores;  //Ya que no podemos tener generadores repetidos, usamos el hasSet
	private String nombreEmpresa;
	
	
	
	
	public Empresa(String nombreEmpresa) {
		super();
		this.listaGeneradores=new HashSet<AbsGenerador>();
		this.setNombreEmpresa(nombreEmpresa);
	}




	public String getNombreEmpresa() {
		return nombreEmpresa;
	}




	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}


	public boolean addGenerador(AbsGenerador g) {
		
		return listaGeneradores.add(g);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder("Empresa  "+ nombreEmpresa + "]\n");
		
		for(AbsGenerador generador:listaGeneradores) {
			
			sb.append(generador.toString()+ "\n");
			
		}
		
		return sb.toString() ;
	}
	
	
	
	
}
