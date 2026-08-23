package edu.unichristus;

import java.util.Scanner;

public class CalculoPesoIdeal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double altura;
        String genero;
        double pesoIdeal = 0;

        System.out.print("Digite seu genero[M/F]: ");
        genero = input.next();

        System.out.print("Digite sua altura: ");
        altura = input.nextDouble();
        // genero = genero.toUpperCase();

        switch (genero) {
            case "F":
                pesoIdeal = 62.1 * altura - 44.7;
                break;
            case "M":
                pesoIdeal = 72.7 * altura - 58;
                break;
            default:
                System.out.println("Genero inválido!");
        }
        System.out.println("Peso Ideal = " + pesoIdeal);
    }
}
