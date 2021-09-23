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


	/**
	 * Agrega generadores a la lista de la empresa
	 * @param g
	 * @return devuelve true si se ha agregado con exito
	 */
	public boolean addGenerador(AbsGenerador g) {
		
		return listaGeneradores.add(g);
	}
	
	/**
	 * Borra generador
	 * @param codigo
	 * @return devuelve true si se ha borrado con exito
	 */
public boolean delGenerador(int codigo) {
		
	
	AbsGenerador generadorSolarABorrar=new GeneradorSolar();
	generadorSolarABorrar.setCodigo(codigo);
	
	AbsGenerador generadorEolicoABorrar=new GeneradorEolico();
	generadorEolicoABorrar.setCodigo(codigo);
	
		return listaGeneradores.remove(generadorEolicoABorrar) || listaGeneradores.remove(generadorSolarABorrar) ;
	}


	/**
	 * Ordena la lista de generadores por fecha de creación y los concatena en un string.
	 * @return devuelve un string
	 */
	public String mostrarGeneradorFecha() {
		
		ArrayList<AbsGenerador> listaFecha = new ArrayList<AbsGenerador>(listaGeneradores);
		Collections.sort(listaFecha);
		
		
	StringBuilder sb = new StringBuilder("MOSTRANDO POR FECHA: \n Empresa  "+ nombreEmpresa + "]\n");
	
	for(AbsGenerador generador:listaFecha) {
		
		sb.append(generador.toString()+ "\n");
		
	}
	return sb.toString();}
	
	
	
	/**
	 * Ordena la lista de generadores por localidad y fecha de creación. Los concatena en un string.
	 * @return devuelve un string
	 */
	public String mostrarGeneradorLocalidad() {
		
		ArrayList<AbsGenerador> listaLocalidad = new ArrayList<AbsGenerador>(listaGeneradores);
		Collections.sort(listaLocalidad, new OrdenaGeneradores());
		
		
	StringBuilder sb = new StringBuilder("MOSTRANDO POR LOCALIDADES: \n Empresa  "+ nombreEmpresa + "]\n");
	
	for(AbsGenerador generador:listaLocalidad) {
		
		sb.append(generador.toString()+ "\n");
		
		}
	return sb.toString();
	}
	
	/**
	 * Comprueba si existe algun generador en la localidad
	 * @param localidad
	 * @return true si existe
	 */
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
	
	/**
	 * Calcula el dinero total que sale de la energia producida entre los distintos generadores
	 * @param precioEnergia
	 * @return Double, dinero producido
	 */
	
	public Double calculaDinero(Double precioEnergia) {
		
		Double result=0.0;
		
		for(AbsGenerador generador:listaGeneradores) {
			
		if(generador instanceof GeneradorEolico) {
			
			result=result+((GeneradorEolico)generador).dinero(precioEnergia);
			
		}else {
			
			result=result+((GeneradorSolar)generador).dinero(precioEnergia);
			
		}
			
			
		}
		
		return result ;
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
