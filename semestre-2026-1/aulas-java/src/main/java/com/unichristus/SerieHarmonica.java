package com.unichristus;

import java.util.Scanner;

public class SerieHarmonica {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int qtdTermos;

        System.out.println("Quantidade de termos: ");
        qtdTermos = input.nextInt();

        if (qtdTermos <= 0) {
            System.out.println("Quantidade de dados insufiente");
        } else {
            float serieHarmonica = 0;
            for (int i = 1; i <= qtdTermos; i++) {
                serieHarmonica += (float) 1 / i;
            }
            System.out.println("Valor da série é: " + serieHarmonica);
        }
    }
}
