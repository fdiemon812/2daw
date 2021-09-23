package energia;

import java.util.ArrayList;
import java.util.Collections;
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


	
	public boolean addGenerador(AbsGenerador g) {
		
		return listaGeneradores.add(g);
	}
	
	
public boolean delGenerador(AbsGenerador g) {
		
		return listaGeneradores.remove(g);
	}



	public String mostrarGeneradorFecha() {
		
		ArrayList<AbsGenerador> listaFecha = new ArrayList<AbsGenerador>(listaGeneradores);
		Collections.sort(listaFecha);
		
		
	StringBuilder sb = new StringBuilder("MOSTRANDO POR FECHA: \n Empresa  "+ nombreEmpresa + "]\n");
	
	for(AbsGenerador generador:listaFecha) {
		
		sb.append(generador.toString()+ "\n");
		
	}
	return sb.toString();}
	
	
	
	
	public String mostrarGeneradorLocalidad() {
		
		ArrayList<AbsGenerador> listaLocalidad = new ArrayList<AbsGenerador>(listaGeneradores);
		Collections.sort(listaLocalidad, new OrdenaGeneradores());
		
		
	StringBuilder sb = new StringBuilder("MOSTRANDO POR LOCALIDADES: \n Empresa  "+ nombreEmpresa + "]\n");
	
	for(AbsGenerador generador:listaLocalidad) {
		
		sb.append(generador.toString()+ "\n");
		
		}
	return sb.toString();
	}
	
	
	public boolean generadorLocalidad(String localidad) {
		boolean result=false;
		
		
		Iterator<AbsGenerador> i = listaGeneradores.iterator();
		
		
		while(i.hasNext() && result==false) {
			AbsGenerador gene= i.next();
			
			if(gene.getLocalidad().equals(localidad)) {
				result=true;
			}
			
		}
		
		return result;
		
	}


	public String getNombreEmpresa() {
		return nombreEmpresa;
	}




	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
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
