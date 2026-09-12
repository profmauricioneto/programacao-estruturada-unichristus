package edu.unichristus;

import java.util.Scanner;

public class ImcPesoIdeal {
    public static double calculoIMC(double pesoAtual, double altura) {
        return pesoAtual / (altura * altura);
    }

    public static double calculoPesoIdeal(String genero, double altura) {
        genero = genero.toLowerCase();
        if (genero.equals("f")) {
            return 62.1 * altura - 44.7;
        } else if (genero.equals("m")) {
            return 72.7 * altura - 58;
        } else {
            System.out.println("Genero Inválido.");
            return 0;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double pesoAtual, altura, pesoIdeal;
        String genero;

        System.out.print("Digite seu peso atual: ");
        pesoAtual = scan.nextDouble();

        System.out.print("Digite sua altura: ");
        altura = scan.nextDouble();

        System.out.print("Digite seu genero(M/F): ");
        genero = scan.next();

        // chamada da subrotina!
        double imc = calculoIMC(pesoAtual, altura);
        pesoIdeal = calculoPesoIdeal(genero, altura);

        System.out.println("Valor do IMC = " + imc);
        System.out.println("Peso Ideal = " + pesoIdeal);

    }

}
