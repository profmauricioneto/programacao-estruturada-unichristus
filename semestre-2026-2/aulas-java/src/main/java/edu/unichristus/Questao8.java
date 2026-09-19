package edu.unichristus;

import java.util.Scanner;

public class Questao8 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int qtdTermos;

        System.out.print("Digite a quantidade de números naturais positivos: ");
        qtdTermos = scan.nextInt();

        int somaQuad = 0;
        int quadSoma = 0;
        int cont = 1;
        while (cont <= qtdTermos) {
            somaQuad = somaQuad + (cont * cont);
            quadSoma = quadSoma + cont;
            cont = cont + 1;
        }
        quadSoma = quadSoma * quadSoma;
        System.out.println("Soma dos Quadrados: " + somaQuad);
        System.out.println("Quadrado da Soma: " + quadSoma);
        int diferenca = quadSoma - somaQuad;
        System.out.println("A diferença entre a soma dos quadrados e o quadrado da soma é: " + diferenca);
    }
}
