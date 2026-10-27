let usuario = {};
usuario.nome = "mauricio";
console.log(usuario);
usuario.idade = 36;
console.log(usuario);
console.log(`Bom dia ${usuario.nome}`);
usuario.isAtivo = true;
console.log(usuario);

for (atrib in usuario) {
  console.log(atrib + " - " + usuario[atrib]);
}
