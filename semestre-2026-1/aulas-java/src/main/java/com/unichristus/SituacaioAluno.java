package com.unichristus;

import java.util.Scanner;

public class SituacaioAluno {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double nota1;
        double nota2;
        double media;

        System.out.print("Nota 1: ");
        nota1 = input.nextDouble();

        System.out.print("Nota 2: ");
        nota2 = input.nextDouble();

        media = (nota1 + nota2) / 2;
        System.out.println("Media = " + media);

        if (media >= 7.0) {
            System.out.println("Aprovado! Vaitimbora!");
        } else {
            if (media < 4.0) {
                System.out.println("Reprovado! Vai ficar por aqui!");
            } else {
                System.out.println("Final! Fica mais um pouco!");

                System.out.print("Digite a nota Final: ");
                double notaFinal = input.nextDouble();

                double mediaFinal = (media + notaFinal) / 2;
                System.out.println("Media Final = " + mediaFinal);

                if (mediaFinal >= 5.0) {
                    System.out.println("Aprovado na Final! Sortudo!");
                } else {
                    System.out.println("Reprovado na Final! Quassseee...");
                }
            }
        }
    }
}
