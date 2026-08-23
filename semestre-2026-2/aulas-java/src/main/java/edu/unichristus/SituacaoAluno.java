package main.java.edu.unichristus;

import java.util.Scanner;

public class SituacaoAluno {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double nota1, nota2, media;
        // entrada de dados
        System.out.print("Entre com a nota 1: ");
        nota1 = input.nextDouble();

        System.out.print("Entre com a nota 2: ");
        nota2 = input.nextDouble();

        media = (nota1 + nota2) / 2;
        System.out.println("Média = " + media);

        if (media >= 7.0) {
            System.out.println("Aprovado! Vairtimbora!");
        } else {
            if (media < 4.0) {
                System.out.println("Reprovado! Vai ficar!");
            } else {
                System.out.println("Final! Fica um pouquinho!");

                System.out.print("Entre com a nota Final: ");
                double notaFinal = input.nextDouble();

                double mediaFinal = (media + notaFinal) / 2;
                System.out.println("Media Final = " + mediaFinal);

                if (mediaFinal >= 5.0) {
                    System.out.println("Aprovado na Final");
                } else {
                    System.out.println("Reprovado na Final!");
                }

            }
        }

        // if (media >= 7.0) {
        // System.out.println("Aprovado!");
        // } else if (media < 4.0) {
        // System.out.println("Reprovado!");
        // } else {
        // System.out.println("Final!");
        // }
    }
}
