package com.unichristus;

public class StringManipulacao {
    public static void main(String[] args) {
        String name = "mauricio";
        name = name.toLowerCase();

        System.out.println(name.length());
        System.out.println(name.charAt(0));
        System.out.println(name.concat("Teste"));
        System.out.println(name.contains("eo"));
        System.out.println(name.equals("MAURICIO".toLowerCase()));

    }
}
