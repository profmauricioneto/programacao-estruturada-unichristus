package edu.unichristus;

import java.util.Scanner;

public class QuestaoFrete {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double distancia;
        double pesoPacote;
        double valorTotal = 0;
        double desconto = 0;

        System.out.print("Digite a distancia que será percorrida: ");
        distancia = input.nextDouble();
        System.out.print("Digite o peso do pacote: ");
        pesoPacote = input.nextDouble();

        if (pesoPacote > 50) {
            desconto = 0.15;
        }

        if (distancia <= 100) {
            valorTotal = pesoPacote * 0.5;
        } else if (distancia <= 500) {
            valorTotal = pesoPacote * 0.8;
        } else {
            valorTotal = pesoPacote * 1.2;
        }

        valorTotal = valorTotal - valorTotal * desconto;
        System.out.println("Valor total = " + valorTotal);
    }
}
