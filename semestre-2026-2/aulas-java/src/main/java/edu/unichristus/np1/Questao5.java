package edu.unichristus.np1;

import java.util.Scanner;

public class Questao5 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String nomeAnimal;
        double pesoAtual;
        int qtdLeituras = 0;
        double pesoAlvo;

        System.out.print("Nome do Animal: ");
        nomeAnimal = input.next();

        System.out.print("Peso Alvo: ");
        pesoAlvo = input.nextDouble();

        double maiorLeitura = pesoAlvo;
        double menorLeitura = pesoAlvo;

        do {
            System.out.println("Peso atual: ");
            pesoAtual = input.nextDouble();

            if (pesoAtual >= 0) {
                if (pesoAtual > maiorLeitura) {
                    maiorLeitura = pesoAtual;
                }

                if (pesoAtual < menorLeitura) {
                    menorLeitura = pesoAtual;
                }
                qtdLeituras++;
            }

        } while (pesoAtual >= 0);

        System.out.println("Nome do Animal: " + nomeAnimal);
        System.out.println("Quantidade de leituras: " + qtdLeituras);
        System.out.println("Maior Leitura: " + maiorLeitura);
        System.out.println("Menor Leitura: " + menorLeitura);
    }
}
