package edu.unichristus;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // criando variaveis
        String nome = "maurício moreira";
        int idade = 36;
        double altura = 1.61;
        boolean ehProfessor = true;
        /*
         * exemplo
         * de
         * comentário
         * de bloco
         */
        // System.out.println("Olá " + nome);
        // System.out.println("Sua idade é: " + idade);
        // System.out.println("Altura: " + altura);
        // System.out.printf("Meu nome é %s e minha idade é %d", nome, idade);

        String username;
        String phrase;
        int password;
        Scanner input = new Scanner(System.in);
        System.out.println("Digite seu usuario: ");
        username = input.next();
        System.out.println(username);

        System.out.println("Digite sua senha: ");
        password = input.nextInt();
        System.out.println(password);

        // System.out.println("Digite uma frase: ");
        // phrase = input.nextLine();
        // System.out.println(phrase);

    }

}