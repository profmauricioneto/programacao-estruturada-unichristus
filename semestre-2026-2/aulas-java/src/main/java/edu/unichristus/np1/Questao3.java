package edu.unichristus.np1;

import java.util.Scanner;

public class Questao3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String nome;
        int diasTreinados;
        String temPersonal;
        double totalConta = 120.0;

        System.out.print("Nome aluno: ");
        nome = input.nextLine();

        System.out.print("Quantidade de dias treinados: ");
        diasTreinados = input.nextInt();

        System.out.print("Tem personal trainer (sim/nao): ");
        temPersonal = input.next();

        if (diasTreinados >= 5) {
            totalConta = totalConta * (1 - 0.15);
        }

        if (temPersonal.equals("sim")) {
            totalConta += 30;
        }

        System.out.println("Total a pagar no mês: " + totalConta);
    }
}
