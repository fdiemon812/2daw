package energia;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.chrono.ChronoLocalDate;
import java.util.Objects;

public abstract class AbsGenerador implements Comparable<AbsGenerador>{

	private int codigo;
	private String localidad;
	private Double potencia;
	private LocalDateTime fechaInicio;
	
	private static int CONTADOR_CODIGO=0;
	
	
	
	
	



	public AbsGenerador(String localidad,  Double potencia) {
		
		this.localidad = localidad;
		this.potencia = potencia;
		this.codigo = CONTADOR_CODIGO;
		this.fechaInicio=LocalDateTime.now();
		CONTADOR_CODIGO++;
	}
	
	
	
	

	public Double getPotencia() {
		return potencia;
	}
	public void setPotencia(Double potencia) {
		this.potencia = potencia;
	}
	public int getCodigo() {
		return codigo;
	}
	public String getLocalidad() {
		return localidad;
	}
	
	
	public LocalDateTime getFechaInicio() {
		return fechaInicio;
	}


	@Override
	public String toString() {
		return " codigo= "+ codigo +", localidad="
	+ localidad + ", potencia=" + potencia + " fechaInicio= " + fechaInicio+"]";
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AbsGenerador other = (AbsGenerador) obj;
		return codigo == other.getCodigo();
	}
	@Override
	public int hashCode() {
		return Objects.hash(codigo);
	}
	
	
	
	@Override
	public int compareTo(AbsGenerador o) {
		int result=0;
		
		if(this.getFechaInicio().isBefore(o.getFechaInicio())) {
			
			result=-1;
			
		}else if(this.getFechaInicio().isAfter(o.getFechaInicio())) {
			result=1;
			

	}
		return result;
	}


}
