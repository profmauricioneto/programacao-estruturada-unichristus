package com.unichristus.subrotinas;

import java.util.Scanner;

public class Calculadora {

    public static void menu() {
        System.out.println("Bem vindo a Calculadora Java");
        System.out.println("1 - Somar");
        System.out.println("2 - Subtrair");
        System.out.println("3 - Multiplicar");
        System.out.println("4 - Dividir");
        System.out.println("5 - Sair");
        System.out.print("Opcao: ");
    }

    public static double somar(double a, double b) {
        return a + b;
    }

    public static double subtrair(double a, double b) {
        return a - b;
    }

    public static double multiplicar(double a, double b) {
        return a * b;
    }

    public static double dividir(double a, double b) {
        double result = 0;
        if (b == 0) {
            System.out.println("Não é possível divisão por zero!");
        } else {
            result = a / b;
        }
        return result;
    }

    public static void calcular(double valor1, double valor2, int opcao) {
        // ....
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int opcao = 0;
        double valor1;
        double valor2;
        do {
            menu();
            opcao = input.nextInt();

        } while (opcao != 5);

    }
}
