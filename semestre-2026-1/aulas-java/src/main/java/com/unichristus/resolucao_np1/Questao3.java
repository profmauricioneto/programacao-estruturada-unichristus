package com.unichristus.resolucao_np1;

import java.util.Scanner;

public class Questao3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double distance;
        double peso;

        System.out.print("Distancia: ");
        distance = scan.nextDouble();
        System.out.print("Peso: ");
        peso = scan.nextDouble();
        double fatorPeso = 1;
        if (distance <= 100) {
            fatorPeso = 0.5;
        } else if (distance <= 500) {
            fatorPeso = 0.8;
        } else {
            fatorPeso = 1.2;
        }
        double valorTotal = distance * fatorPeso;

        if (peso > 50) {
            valorTotal -= valorTotal * 0.15;
        }

        System.out.println("Valor total: " + valorTotal);
    }
}
