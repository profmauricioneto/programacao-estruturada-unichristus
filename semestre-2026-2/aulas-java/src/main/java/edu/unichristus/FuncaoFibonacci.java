package edu.unichristus;

import java.util.Scanner;

public class FuncaoFibonacci {
    public static void fibonacci(int qtdTermos) {
        int primeiro = 0;
        int segundo = 1;
        int proximo;
        if (qtdTermos <= 0) {
            System.out.println("Não é possível fazer a sequencia.");
        } else if (qtdTermos == 1) {
            System.out.println(primeiro);
        } else if (qtdTermos == 2) {
            System.out.println(primeiro);
            System.out.println(segundo);
        } else {
            System.out.println(primeiro);
            System.out.println(segundo);
            for (int i = 2; i < qtdTermos; i++) {
                proximo = primeiro + segundo;
                System.out.println(proximo);
                primeiro = segundo;
                segundo = proximo;
            }
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int quantidadeTermos;

        System.out.print("Digite a quantidade de termos: ");
        quantidadeTermos = scan.nextInt();

        // chamada da subrotina
        fibonacci(quantidadeTermos);
    }
}
