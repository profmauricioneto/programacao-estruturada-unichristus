package com.unichristus;

import java.util.Scanner;

public class PesoIdeal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double altura;
        String genero;
        double pesoIdeal = 0;
        // entrada de dados
        System.out.print("Digite a sua altura: ");
        altura = input.nextDouble();

        System.out.print("Digite o sexo (Masculino/Feminino): ");
        genero = input.next();
        genero = genero.toLowerCase();

        switch (genero) {
            case "masculino": {
                pesoIdeal = (72.7 * altura) - 58;
                break;
            }
            case "feminino": {
                pesoIdeal = (62.1 * altura) - 44.7;
                break;
            }
            default: {
                System.out.println("Erro ao realizar o calculo.");
                System.exit(0);
            }
        }
        System.out.println("O peso ideal é: " + pesoIdeal);
    }
}
