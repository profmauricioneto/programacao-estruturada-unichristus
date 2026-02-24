package com.unichristus;

import java.util.Scanner;

public class Olerite {
    public static void main(String[] args) {
        double valorHora;
        int quantidadeHora;
        Scanner input = new Scanner(System.in);
        // entrada de dados
        System.out.print("Digite o valor da hora trabalhada: ");
        valorHora = input.nextDouble();

        System.out.print("Digite a quantidade de horas trabalhadas: ");
        quantidadeHora = input.nextInt();

        // processamento
        double salarioBruto;
        salarioBruto = valorHora * quantidadeHora;
        double inss = 0.14 * salarioBruto;
        double ir = 0.15 * salarioBruto;
        double sindicato = 0.05 * salarioBruto;
        double salarioLiquido = salarioBruto - (inss + ir + sindicato);

        // Saída de dados
        System.out.println("+ Salario Bruno: R$ " + salarioBruto);
        System.out.println("- INSS: R$ " + inss);
        System.out.println("- IR: R$ " + ir);
        System.out.println("- Sindicato: R$ " + sindicato);
        System.out.println("= Salario Liquido: R$ " + salarioLiquido);

        input.close();
    }
}
