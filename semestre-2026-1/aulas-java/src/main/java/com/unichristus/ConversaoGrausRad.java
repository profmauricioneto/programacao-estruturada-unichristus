package com.unichristus;

import java.util.Scanner;

public class ConversaoGrausRad {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        final double VALORPI = 3.1415f;
        double radiano;
        double graus;
        // entrada de dados
        System.out.print("Digite o valor em graus: ");
        graus = input.nextDouble();
        // processamento
        radiano = (graus * Math.PI) / 180;
        // saída de dados
        System.out.println("Valor em Radiano: " + radiano);
    }
}
