package edu.unichristus;

import java.util.Scanner;

public class TesteException {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Digite sua idade: ");
            int idade = scanner.nextInt();
            validarIdade(idade);
            System.out.println("Idade cadastrada com sucesso!");
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Entrada inválida.");
        }
        scanner.close();
    }

    public static void validarIdade(int idade) throws IllegalArgumentException {
        if (idade < 0) {
            throw new IllegalArgumentException("A idade não pode ser negativa.");
        }
    }
}