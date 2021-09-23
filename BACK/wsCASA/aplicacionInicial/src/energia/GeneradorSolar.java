package energia;

public class GeneradorSolar extends AbsGenerador implements IMonetizable {

	
	private EnumTipoSolar tipo;
	private int numPaneles;
	private Double metrosTotales;
	
	
	
	public GeneradorSolar(String localidad, Double potencia, String tipo, 
			int numPaneles, Double metrosTotales) throws Exception {
		
		
		super(localidad, potencia);
		this.numPaneles=numPaneles;
		this.metrosTotales=metrosTotales;
		
		if(!tipo.equals("FOTOVOLTAICO") && !tipo.equals("HIBRIDO") && !tipo.equals("TERMICO")) {
			throw new TipoIncorrectoException();
			
			}else {
				this.tipo=EnumTipoSolar.valueOf(tipo);
				
		}
		
		

		
		
	}



	@Override
	public String toString() { 							//Dividimos para calcular coeficiente solar al mostrar
		return "GeneradorSolar [tipo=" + tipo + ", coeficiente solar=" + (metrosTotales/numPaneles) + super.toString() +"]";
	}



	public EnumTipoSolar getTipo() {
		return tipo;
	}



	public void setTipo(EnumTipoSolar tipo) {
		this.tipo = tipo;
	}



	public int getNumPaneles() {
		return numPaneles;
	}



	public void setNumPaneles(int numPaneles) {
		this.numPaneles = numPaneles;
	}



	public Double getMetrosTotales() {
		return metrosTotales;
	}



	public void setMetrosTotales(Double metrosTotales) {
		this.metrosTotales = metrosTotales;
	}



	@Override
	public Double dinero(Double precioEnergia) {
		return precioEnergia*getPotencia()*getNumPaneles();
	}



	

}
