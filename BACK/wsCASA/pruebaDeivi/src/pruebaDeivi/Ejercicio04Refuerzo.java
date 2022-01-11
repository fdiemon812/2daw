package pruebaDeivi;

import java.util.Scanner;

public class Ejercicio04Refuerzo {
    public static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
        int numerosIntroducidos = 1, valorMaximo = 0, valorMinimo = 9999, sumaNumeros = 0, cantidadNumeros = -1;
        double mediaNumero = 0.0;

        while (numerosIntroducidos != 0) {
            System.out.println("Introduzca algún/os número/s. Parará cuando llegue a 0");
            numerosIntroducidos = Integer.parseInt(teclado.nextLine());

            sumaNumeros = sumaNumeros + numerosIntroducidos;
            cantidadNumeros++;

            if (numerosIntroducidos > valorMaximo) {
                valorMaximo=numerosIntroducidos;
            }

            if (numerosIntroducidos < valorMinimo) {
                valorMinimo=numerosIntroducidos;
            }

        }

        if (cantidadNumeros != 0) {
            mediaNumero =sumaNumeros/cantidadNumeros;
        }

        System.out.println("La media de los números introducidos es: " + mediaNumero);

        System.out.println("El número máximo es " + valorMaximo + " y el valor mínimo es " + valorMinimo);
    }}
