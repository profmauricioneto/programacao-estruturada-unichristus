package edu.unichristus;

import java.util.Scanner;

public class DiagonalPrincipal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int matriz[][] = new int[3][3];
        int somatorio = 0;

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print("m[" + i + "],[" + j + "]: ");
                matriz[i][j] = input.nextInt();

                if (i == j) {
                    somatorio += matriz[i][j];
                }
            }
        }

        System.out.println("O somatório da diagonal principal = " + somatorio);
    }
}
