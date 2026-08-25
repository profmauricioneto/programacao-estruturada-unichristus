package edu.unichristus;

public class CalcDiference {
    public static void main(String[] args) {
        int quadSoma = 0;
        int somaQuad = 0;
        int diff;
        int cont = 1;

        // while (cont <= 10) {
        // somaQuad = somaQuad + (cont * cont);
        // quadSoma = quadSoma + cont;
        // cont++; // cont = cont + 1;
        // }
        do {
            somaQuad = somaQuad + (cont * cont);
            quadSoma = quadSoma + cont;
            cont++; // cont = cont + 1;
        } while (cont <= 10);

        System.out.println("Soma dos Quadrados = " + somaQuad);
        quadSoma = quadSoma * quadSoma;
        System.out.println("Quadrado da Soma = " + quadSoma);
        diff = quadSoma - somaQuad;
        System.out.println("Diferença = " + diff);
    }
}
