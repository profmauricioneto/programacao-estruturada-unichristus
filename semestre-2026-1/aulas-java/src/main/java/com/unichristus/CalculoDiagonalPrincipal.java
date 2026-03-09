package com.unichristus;

import java.util.Scanner;

public class CalculoDiagonalPrincipal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int linhas;
        int colunas;
        do {
            System.out.print("Digite a quantidade de linhas: ");
            linhas = input.nextInt();
            System.out.print("Digite a quantidade de colunas: ");
            colunas = input.nextInt();
        } while (linhas != colunas);

        if ((linhas == colunas) && (linhas > 0 && colunas > 0)) {
            int matriz[][] = new int[linhas][colunas];
            int contadorDiagonal = 0;

            for (int i = 0; i < linhas; i++) {
                for (int j = 0; j < colunas; j++) {
                    System.out.printf("matriz[%d][%d] = ", i, j);
                    matriz[i][j] = input.nextInt();
                    if (i == j) {
                        contadorDiagonal += matriz[i][j];
                    }
                }
            }
            System.out.println("Soma da Diagonal Principal é: " + contadorDiagonal);
        } else {
            System.out.println("Não é possível calcular diagonal principal em matrizes não quadráticas!");
        }
    }
}
