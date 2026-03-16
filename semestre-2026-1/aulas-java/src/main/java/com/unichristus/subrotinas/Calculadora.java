package com.unichristus.subrotinas;

import java.util.Scanner;

public class Calculadora {

    public static void help() {
        System.out.println("SISTEMA DE AJUDA DA CALCULADORA!");
        System.out.println("Bem vindo a Calculadora Java");
        System.out.println("1 - Somar");
        System.out.println("2 - Subtrair");
        System.out.println("3 - Multiplicar");
        System.out.println("4 - Dividir");
        System.out.println("5 - Sair");
    }

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

    public static boolean calcular(double valor1, double valor2, int opcao) {
        boolean isRunning = true;
        double resultado = 0;
        switch (opcao) {
            case 1:
                resultado = somar(valor1, valor2);
                System.out.println("Resultado = " + resultado);
                break;
            case 2:
                resultado = subtrair(valor1, valor2);
                System.out.println("Resultado = " + resultado);
                break;
            case 3:
                resultado = multiplicar(valor1, valor2);
                System.out.println("Resultado = " + resultado);
                break;
            case 4:
                resultado = dividir(valor1, valor2);
                System.out.println("Resultado = " + resultado);
                break;
            default:
                System.out.println("Nenhuma opção válida foi escolhida");
                isRunning = false;
        }
        return isRunning;
    }

    public static void main(String[] args) {
        if (args.length > 0 && (args[0].equals("-h") || args[0].equals("help"))) {
            help();
            System.exit(5);
        }

        Scanner input = new Scanner(System.in);
        int opcao = 0;
        double valor1;
        double valor2;
        do {
            menu();
            opcao = input.nextInt();
            if (opcao >= 1 && opcao < 5) {
                System.out.print("Valor 1: ");
                valor1 = input.nextDouble();
                System.out.print("Valor 2: ");
                valor2 = input.nextDouble();
                boolean foiCalculado = calcular(valor1, valor2, opcao);
                if (!foiCalculado) {
                    System.out.println("Não foi possível calcular!");
                }
            }

        } while (opcao != 5);

    }
}
