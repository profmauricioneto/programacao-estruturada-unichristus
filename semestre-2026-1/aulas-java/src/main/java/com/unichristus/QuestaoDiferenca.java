package com.unichristus;

public class QuestaoDiferenca {
    public static void main(String[] args) {
        int somaQuad = 0;
        int quadSoma = 0;
        int cont = 1;

        // while (cont <= 10) {
        // somaQuad = somaQuad + cont * cont;
        // quadSoma = quadSoma + cont;
        // cont++;
        // }
        do {
            somaQuad = somaQuad + cont * cont;
            quadSoma = quadSoma + cont;
            cont++;
        } while (cont <= 10);
        quadSoma = quadSoma * quadSoma;
        System.out.println("Valor do Quadrado da Soma: " + quadSoma);
        System.out.println("Valor Soma dos Quadrados: " + somaQuad);

        int diferenca = quadSoma - somaQuad;
        System.out.println("A diferença é: " + diferenca);
    }
}
