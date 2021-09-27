package energia;

public class TipoIncorrectoException extends Exception {
	
	
	public TipoIncorrectoException() {
		super("El tipo debe ser FOTOVOLTAICO, HIBRIDO, TERMICO");
	}

}
