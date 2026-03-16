package com.unichristus.excecoes;

import java.util.Scanner;

public class Divisao {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double res = 0, value1, value2;
        System.out.println("Valor 1: ");
        value1 = input.nextDouble();
        System.out.println("Valor 2: ");
        value2 = input.nextDouble();
        try {
            res = value1 / value2;
        } catch (ArithmeticException e) {
            System.out.println(e.getCause());
        } finally {
            System.out.println("Resultado do código = " + res);
        }

    }
}
