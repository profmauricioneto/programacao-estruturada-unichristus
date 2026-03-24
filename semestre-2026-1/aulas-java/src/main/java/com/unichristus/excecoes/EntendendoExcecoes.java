package com.unichristus.excecoes;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class EntendendoExcecoes {
    public static void acessarArquivo(String nomeArquivo) throws IOException {
        try {
            File file = new File(nomeArquivo);
            System.out.println(file.getAbsolutePath());
        } catch (Exception e) {
            throw new IOException(e);
        }
    }

    public static double divisao(double a, double b) throws ArithmeticException {
        double resultado = 0;
        try {
            resultado = a / b;
        } catch (Exception e) {
            throw new ArithmeticException();
        }
        return resultado;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = 1;
        int b = 0;

        try {
            double resultado = divisao(a, b);
        } catch (ArithmeticException e) {
            System.out.println("Teste");
            System.err.println(e.getMessage());
        }
    }
}
