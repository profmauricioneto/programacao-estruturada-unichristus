package edu.unichristus;

import java.util.Scanner;

public class VerificacaoIdade {
    public static void main(String[] args) {
        int idade;
        Scanner input = new Scanner(System.in);

        System.out.println("Digite sua idade: ");
        idade = input.nextInt();

        String permissao;
        if (idade >= 18) {
            permissao = "Permitida a entrada";
        } else {
            permissao = "Não permitida a entrada";
        }

        // String permissao = (idade >= 18) ? "Permitida a entrada" : "Não permitada a
        // entrada";

        System.out.println(permissao);
    }
}
