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
				+ "\n \t 7. Calcular dinero ganado con la produccion"
				+ "\n \t 8. Fin \n"
				+ "\n \t QUE DESEAS HACER? \n"
				
				;
		
		System.out.println(menu);}
	
	
	
	public static void main(String[] args) {
		
		Empresa empresa = new Empresa("Repsol");
		Scanner sc = new Scanner(System.in);
		
		
		int opcion=0;
		
		
		
		while(opcion!=8) {
			
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
				
								
				if(empresa.addGenerador(new GeneradorSolar(localidad, potencia, tipo, numPaneles,
					metrosTotales))) {
				
					System.out.println("Generador agregado con exito");
				}else {
					System.out.println("Generador ya existente");

				}
			} catch (Exception e) {
				 System.out.println(e.getMessage());
			}
			
			
			
			break;
			

		case 2:
			
			System.out.println("Introduce una localidad");
			String localidad2= sc.nextLine();
			
			System.out.println("Introduce la potencia con decimales");
			Double potencia2=Double.parseDouble(sc.nextLine());
			
			System.out.println("Introduce el numero de aspas");
			int numAspas=Integer.parseInt(sc.nextLine());
			
			
			
			if(empresa.addGenerador(new GeneradorEolico(localidad2, potencia2, numAspas))) {
				
					System.out.println("Generador agregado con exito");
				}else {
					System.out.println("Generador ya existente");

				}
			
			break;
			

		case 3:
			
			
			System.out.println("Introduce el código del generador que quieres borrar");
			
			
			if(empresa.delGenerador(Integer.parseInt(sc.nextLine()))) {
				
				
				
				
				System.out.println("Generador borrado con exito");
			}else {
				System.out.println("Generador no existente");

			}
			
			
			break;
			

		case 4:
			
			System.out.println(empresa.mostrarGeneradorFecha());
			
			break;
			

		case 5:
			
			

			System.out.println(empresa.mostrarGeneradorLocalidad());
			
			break;
			

		case 6:
			
			
			System.out.println("Introduce una localidad");
			String localidad3= sc.nextLine();
			
			if(empresa.generadorLocalidad(localidad3)) {
				
				System.out.println("Actualmente tenemos generador/es en la localidad");

				
				
			}else {
				
				System.out.println("No hay generador en la localidad");
				
			}
			
			
			break;
			
		case 7:
			
			

			System.out.println("Introduce el precio de la energia con decimales");
			Double precio=Double.parseDouble(sc.nextLine());
			
			System.out.println(empresa.calculaDinero(precio));
			
			
			break;
			
		case 8:
			
			System.out.println("HASTA OTRA!!!!!!");
			opcion=7;
			
			break;
			

		
		default:
			break;
		}
		}

	}

}
