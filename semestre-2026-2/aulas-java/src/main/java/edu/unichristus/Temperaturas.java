package edu.unichristus;

import java.util.Scanner;

public class Temperaturas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double temperaturas[] = new double[7];
        double media = 0;

        for (int i = 0; i < temperaturas.length; i++) {
            System.out.print("Temperatura[" + i + "]: ");
            temperaturas[i] = input.nextDouble();
            media += temperaturas[i];
        }
        media = media / temperaturas.length;
        System.out.println("Media das Temperaturas = " + media);

        double maior = temperaturas[0];
        double menor = temperaturas[0];
        for (int i = 0; i < temperaturas.length; i++) {
            if (maior < temperaturas[i]) {
                maior = temperaturas[i];
            }
            if (menor > temperaturas[i]) {
                menor = temperaturas[i];
            }
        }
        System.out.println("A menor temperatura = " + menor);
        System.out.println("A maior temperatura = " + maior);
    }
}
