package edu.unichristus;

import java.util.Scanner;

public class SerieHarmonica {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int qtdTermos;
        double hn = 0;

        System.out.print("Digite a quantidade de termos: ");
        qtdTermos = input.nextInt();

        for (int i = 1; i <= qtdTermos; i++) {
            hn = hn + (double) 1 / i;
        }
        System.out.println("Valor da serie = " + hn);
    }
}
