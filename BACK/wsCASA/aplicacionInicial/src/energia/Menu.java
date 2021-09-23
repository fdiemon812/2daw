package energia;

import java.util.Scanner;

public class Menu {

	/**
	 *  Crea el menú y devuelve un String
	 * @return
	 */
	public static void mostrarMenu() {
		
		String menu = "\n \t BIENVENIDO A REPSOL \n"
				+ "\n \t 1. Agregar generador solar"
				+ "\n \t 2. Agregar generador eolico"
				+ "\n \t 3. Borrar generador"
				+ "\n \t 4. Mostrar generadores por fecha de creacion"
				+ "\n \t 5. Mostrar generadores por localidad"
				+ "\n \t 6. Comprobar si existe generador en la localidad"
				+ "\n \t 7. Fin \n"
				+ "\n \t QUE DESEAS HACER? \n"
				
				;
		
		System.out.println(menu);}
	
	
	
	public static void main(String[] args) {
		
		Empresa empresa = new Empresa("Repsol");
		Scanner sc = new Scanner(System.in);
		
		
		int opcion=0;
		
		
		
		while(opcion!=7) {
			
			mostrarMenu();
			
			opcion=Integer.parseInt(sc.nextLine());
			
		switch (opcion) {
		case 1:
			
			
			System.out.println("Introduce una localidad");
			String localidad= sc.nextLine();
			
			System.out.println("Introduce la potencia con decimales");
			Double potencia=Double.parseDouble(sc.nextLine());
			
			System.out.println("Introduce el tipo: FOTOVOLTAICO, HIBRIDO, TERMICO");
			String tipo=sc.nextLine();
			
			
			
			System.out.println("Introduce el numero de palenes");
			int numPaneles=Integer.parseInt(sc.nextLine());
			
			System.out.println("Introduce el total de metros con decimales");
			Double metrosTotales=Double.parseDouble(sc.nextLine());
			
			
			AbsGenerador gen=null;
			
			try {
				
				
			 gen = new GeneradorSolar(localidad, potencia, tipo, 
						numPaneles, metrosTotales);
				
				
//				empresa.addGenerador(new GeneradorSolar(localidad, potencia, tipo, numPaneles,
//						metrosTotales));
//					System.out.println("Generador agregado con exito");
			} catch (Exception e) {
				 System.out.println(e.getMessage());
			}
			
			
			
			break;
			

		case 2:
			
			break;
			

		case 3:
			
			break;
			

		case 4:
			
			break;
			

		case 5:
			
			break;
			

		case 6:
			
			break;
			

		case 7:
			
			break;
			

		
		default:
			break;
		}
		}

	}

}
