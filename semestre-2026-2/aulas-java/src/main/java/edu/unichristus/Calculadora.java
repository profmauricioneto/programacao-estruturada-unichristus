package edu.unichristus;

import java.util.Scanner;

public class Calculadora {

    public static double divisao(double a, double b) {
        try {
            return a / b;
        } catch (ArithmeticException e) {
            System.out.println(e.getMessage());
            return 0;
        } finally {
            System.out.println("Executando pós try-catch");
        }
        // if (b == 0) {
        // System.out.println("Erro: não é possível divisao por zero");
        // return 0;
        // } else {
        // return a / b;
        // }
    }

    public static double multiplicacao(double a, double b) {
        return a * b;
    }

    public static double subtracao(double a, double b) {
        return a - b;
    }

    public static double somar(double a, double b) {
        return a + b;
    }

    public static void menu() {
        System.out.println("Opções: ");
        System.out.println("1 - Somar");
        System.out.println("2 - Subtrair");
        System.out.println("3 - Multiplicar");
        System.out.println("4 - Dividir");
        System.out.println("5 - Sair");
        System.out.print("Escolha: ");
    }

    public static void help() {
        System.out.println("Bem-vindo a Calculadora Básica!");
        System.out.println("Temos as seguintes opções: ");
        System.out.println("1 - Somar");
        System.out.println("2 - Subtrair");
        System.out.println("3 - Multiplicar");
        System.out.println("4 - Dividir");
        System.out.println("5 - Sair");
    }

    public static void main(String[] args) {
        if (args.length > 0 && (args[0].equals("-h") || args[0].equals("--help"))) {
            help();
        } else {
            Scanner scan = new Scanner(System.in);
            double valor1;
            double valor2;
            double resultado = 0;
            int opcao;

            do {
                menu();
                opcao = scan.nextInt();
                System.out.println("Digite o valor 1: ");
                valor1 = scan.nextDouble();
                System.out.println("Digite o valor 2: ");
                valor2 = scan.nextDouble();

                switch (opcao) {
                    case 1: {
                        resultado = somar(valor1, valor2);
                        break;
                    }
                    case 2: {
                        resultado = subtracao(valor1, valor2);
                        break;
                    }
                    case 3: {
                        resultado = multiplicacao(valor1, valor2);
                        break;
                    }
                    case 4: {
                        resultado = divisao(valor1, valor2);
                        break;
                    }
                    case 5: {
                        System.out.println("Obrigado por usar a calculadora!");
                        break;
                    }
                    default: {
                        System.out.println("Opção Inválida!");
                    }
                }
                System.out.println("Resultado: " + resultado);
            } while (opcao != 5);
        }
    }
}
