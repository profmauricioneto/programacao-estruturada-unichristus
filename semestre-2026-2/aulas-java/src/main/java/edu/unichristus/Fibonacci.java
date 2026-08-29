package edu.unichristus;

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int termos;

        System.out.print("Digite a quantidad de termos de Fibonacci: ");
        termos = input.nextInt();
        if (termos <= 0) {
            System.out.println("Não é possível realizar a série de Fibonacci com valores negativos ou nulos!");
        } else {
            int t1 = 0;
            int t2 = 1;
            if (termos == 1) {
                System.out.println(t1);
            } else if (termos == 2) {
                System.out.println(t1 + "\n" + t2);
            } else {
                System.out.println(t1 + "\n" + t2);
                int aux = 0;
                for (int i = 2; i < termos; i++) {
                    aux = t1 + t2;
                    System.out.println(aux);
                    t1 = t2;
                    t2 = aux;
                }
            }
        }

    }
}
