package main.java.edu.unichristus;

import java.util.Scanner;

public class Conversao {
    public static void main(String[] args) {
        double rad;
        double graus;
        // final double PI = 3.1415;
        Scanner input = new Scanner(System.in);

        // entrada de dados
        System.out.print("Digite o angulo em graus: ");
        graus = input.nextDouble();

        // processamento
        rad = (graus * Math.PI) / 180;

        // saída de dados
        System.out.print("Conversão em radianos: " + rad);
    }
}
