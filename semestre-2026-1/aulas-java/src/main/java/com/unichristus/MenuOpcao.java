package com.unichristus;

import java.util.Scanner;

public class MenuOpcao {
    public static void main(String[] args) {
        int opcao;
        Scanner input = new Scanner(System.in);

        do {
            System.out.println("Bem vindo ao Menu!");
            System.out.println("Digite 1 - Para tal coisa");
            System.out.println("Digite 2 - Para outra coisa");
            System.out.println("Digite 3 - Para coisa nenhuma");
            System.out.println("Digite 4 - Para sair");
            System.out.print("Opcao: ");
            opcao = input.nextInt();
        } while (opcao != 4);
        System.out.println("Saindo do sistema...");
    }
}
