package energia;

public class GeneradorEolico extends AbsGenerador implements IMonetizable {

	private int numeroAspas;
	 
	
	
	public GeneradorEolico(String localidad,  Double potencia, int numeroAspas) {
		super(localidad, potencia);
		this.numeroAspas=numeroAspas;

		
	}



	@Override
	public String toString() {
		return " GeneradorEolico [numeroAspas=" + numeroAspas + super.toString()+"]";
	}



	public int getNumeroAspas() {
		return numeroAspas;
	}



	public void setNumeroAspas(int numeroAspas) {
		this.numeroAspas = numeroAspas;
	}



	@Override
	public Double dinero(Double precioEnergia) {
		
		
		
		return precioEnergia*getNumeroAspas();
	}
	
	
	

}
