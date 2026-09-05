package edu.unichristus;

import java.util.Scanner;

public class CalculoNotasAvaliacao {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int notas[] = new int[5];
        int somatorio = 0;
        int contadorExcelentes = 0;
        // preenchimento do array de notas
        for (int i = 0; i < notas.length; i++) {
            System.out.print("Nota[" + i + "]: ");
            notas[i] = input.nextInt();
            somatorio = somatorio + notas[i];
            if (notas[i] == 5) {
                contadorExcelentes = contadorExcelentes + 1;
            }
        }

        double media = (int) somatorio / notas.length;
        System.out.println("Media da Avaliação: " + media);
        System.out.println("Quantidade de Notas 5 = " + contadorExcelentes);
    }
}
