package com.unichristus.resolucao_np1;

import java.util.Scanner;

public class Questao4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double media;
        double frequencia;

        System.out.print("Media: ");
        media = scan.nextDouble();

        System.out.print("frequencia: ");
        frequencia = scan.nextDouble();

        String conceito = "";

        if (frequencia < 50) {
            conceito = "RF";
        } else {
            if (media >= 7 && frequencia >= 75) {
                conceito = "A";
            } else if (media >= 5 && frequencia >= 75) {
                conceito = "B";
            } else {
                conceito = "R";
            }
        }
        System.out.println("Conceito: " + conceito);
    }
}
