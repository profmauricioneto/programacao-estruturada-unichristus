package com.unichristus.subrotinas;

import java.util.Scanner;

public class PesoIdeal {

    public static double calcularIMC(double pesoAtual, double altura) {
        return pesoAtual / (altura * altura);
    }

    public static double calcularPesoIdeal(String sexo, double altura) {
        double pesoIdeal = 0;
        switch (sexo.toLowerCase()) {
            case "homem":
            case "masculino":
                pesoIdeal = 72.7 * altura - 58;
                break;
            case "mulher":
            case "feminino":
                pesoIdeal = 62.1 * altura - 44.7;
                break;
            default:
                System.out.println("Erro ao calcular o peso ideal!");
        }
        return pesoIdeal;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String sexo;
        double altura;
        double pesoAtual;

        System.out.println("Digite o sexo do paciente: ");
        sexo = input.next();

        System.out.println("Digite a altura do paciente: ");
        altura = input.nextDouble();

        System.out.println("Digite o peso atual do paciente: ");
        pesoAtual = input.nextDouble();

        double imc = calcularIMC(pesoAtual, altura);
        double pesoIdeal = calcularPesoIdeal(sexo, altura);

        if (pesoIdeal != 0) {
            System.out.println("Valor do peso Ideal: " + pesoIdeal);
        }
        System.out.println("Valor do IMC: " + imc);
    }
}