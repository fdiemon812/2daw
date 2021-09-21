package energia;

public class Main {

	public static void main(String[] args) {

		
		AbsGenerador gen = new GeneradorEolico("Sevilla", 2.0, 4);
		AbsGenerador gen2 = new GeneradorEolico("Jaen", 8.0, 3);
		
		
		AbsGenerador gen3=null;
		AbsGenerador gen4=null;
		
		
		try {
			gen3 = new GeneradorSolar("Malaga", 20.0, "FOTOVOLTAICO", 3, 50.0);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		

		try {
			gen4 = new GeneradorSolar("Malaga", 20.0, "hasdasdasdasd", 3, 50.0);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}

		
		Empresa empre = new Empresa("Rayos");
		empre.addGenerador(gen2);
		empre.addGenerador(gen3);
		empre.addGenerador(gen);
		
//		System.out.println(gen.toString());
//		System.out.println(gen2.toString());
//		System.out.println(gen3.toString());
		
		System.out.println(empre.toString());
		
		
		
		
	}

}
