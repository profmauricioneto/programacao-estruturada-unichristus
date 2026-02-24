package com.unichristus;

import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int valor;
        System.out.println("Digite um valor inteiro: ");
        valor = input.nextInt();

        String resultado;
        resultado = (valor % 2 == 0) ? "Par" : "Impar";
        System.out.println(resultado);
    }
}
