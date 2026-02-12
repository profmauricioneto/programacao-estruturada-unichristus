package com.unichristus;

import java.util.Scanner;

public class ExemploSaidaDados {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String nome;
        int idade;
        // Entrada de Dados
        System.out.println("Digite seu nome: ");
        nome = input.next();
        System.out.println("Digite sua idade: ");
        idade = input.nextInt();

        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
    }
}
