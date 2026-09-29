package edu.unichristus.np1;

import java.util.Scanner;

public class Questao4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String nomeCliente;
        double valorGasto;
        int qtdCompras = 0;
        double total = 0;

        System.out.print("Cliente: ");
        nomeCliente = input.nextLine();

        do {
            System.out.print("Qual o valor gasto: ");
            valorGasto = input.nextDouble();
            if (valorGasto != 0) {
                qtdCompras++;
            }
            total += valorGasto;

        } while (valorGasto != 0);

        System.out.println("Cliente: " + nomeCliente);
        System.out.println("Total gastado: " + total);
        System.out.println("Quantidade de Compras: " + qtdCompras);
    }
}
