package com.unichristus;

import java.util.Scanner;

public class Fatorial {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int valor;

        System.out.print("Numero: ");
        valor = input.nextInt();
        if (valor < 0) {
            System.out.println("Numero inválido!");
        } else {
            int fatorial = 1;
            for (int i = valor; i > 0; i--) {
                fatorial = fatorial * i;
                System.out.println(fatorial);
            }
            System.out.println("Resultado Fatorial: " + fatorial);
        }
    }
}
