package edu.unichristus;

import java.util.Scanner;

public class SistemaVotacao {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int cantidato1 = 0;
        int cantidato2 = 0;
        int cantidato3 = 0;
        int cantidato4 = 0;
        int nulos = 0;
        int brancos = 0;
        int totalVotos = 0;
        int voto;

        do {
            do {
                System.out.print("Digite seu voto: ");
                voto = scan.nextInt();
            } while (voto < 1 && voto > 7);
            switch (voto) {
                case 1: {
                    cantidato1++;
                    totalVotos++;
                    break;
                }
                case 2: {
                    cantidato2++;
                    totalVotos++;
                    break;
                }
                case 3: {
                    cantidato3++;
                    totalVotos++;
                    break;
                }
                case 4: {
                    cantidato4++;
                    totalVotos++;
                    break;
                }
                case 5: {
                    nulos++;
                    totalVotos++;
                    break;
                }
                case 6: {
                    brancos++;
                    totalVotos++;
                    break;
                }
                case 0: {
                    System.out.println("Fim da Eleição");
                    break;
                }
                default:
                    System.out.println("Nenhuma opção válida foi digitada");
            }

        } while (voto != 0);
        System.err.println("Total de votos: " + totalVotos);
        System.out.println("Candidato 1 teve " + cantidato1 + " votos");
        System.out.println("Candidato 2 teve " + cantidato2 + " votos");
        System.out.println("Candidato 3 teve " + cantidato3 + " votos");
        System.out.println("Candidato 4 teve " + cantidato4 + " votos");
        System.out.println("Total de Nulos e Brancos: " + (nulos + brancos));
        int brancosNulos = brancos + nulos;
        double porcentagem = (double) brancosNulos / totalVotos;
        System.out.println("Percentual de Brancos e Nulos: " + porcentagem);
    }
}
