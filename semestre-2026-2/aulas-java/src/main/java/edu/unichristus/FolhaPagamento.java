package edu.unichristus;

import java.util.Scanner;

public class FolhaPagamento {
    public static void main(String[] args) {
        double valorHora, salarioBruto, salarioLiquido, ir, inss, sindicato;
        int horasTrabalhada;
        Scanner input = new Scanner(System.in);

        // Entrada de dados
        System.out.print("Valor da Hora: ");
        valorHora = input.nextDouble();
        System.out.print("Quantidade de horas trabalhadas: ");
        horasTrabalhada = input.nextInt();

        // processamento
        // calcular salario bruto e descontos
        salarioBruto = valorHora * horasTrabalhada;
        ir = 0.15 * salarioBruto;
        inss = 0.14 * salarioBruto;
        sindicato = 0.05 * salarioBruto;
        // calcular o salario liquido
        salarioLiquido = salarioBruto - (ir + inss + sindicato);

        // Saída de dados
        System.out.println("+ Salário Bruto: R$: " + salarioBruto);
        System.out.println("- IR: R$: " + ir);
        System.out.println("- INSS: R$: " + inss);
        System.out.println("- Sindicato: R$: " + sindicato);
        System.out.println("= Salário Liquido: R$: " + salarioLiquido);
    }
}
