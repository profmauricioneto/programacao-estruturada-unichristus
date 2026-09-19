package edu.unichristus;

import java.util.Scanner;

public class QuestaoPedidos {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double valorPedido;
        int contadorPedido = 0;
        double totalPedidos = 0;

        do {
            System.out.println("Digite o valor do pedido: ");
            valorPedido = input.nextDouble();
            if (valorPedido != 0 && valorPedido > 0) {
                contadorPedido += 1;
            }
            totalPedidos += valorPedido;
        } while (valorPedido != 0 && valorPedido > 0);

        System.out.println("Quantidade de pedidos: " + contadorPedido);
        System.out.println("Total de Pedidos: " + totalPedidos);
        double media = totalPedidos / contadorPedido;
        System.out.println("Valor médio dos pedidos: " + media);
    }
}
