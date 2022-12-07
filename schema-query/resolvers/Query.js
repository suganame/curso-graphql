const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Basta retornar uma string";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ana da Web",
      email: "anadaweb@gmail.com",
      idade: 23,
      salario_real: 1234.56,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Chocolate",
      preco: 10.0,
      desconto: 0,
    };
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const user = usuarios.find((u) => u.id === id);
    return user;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const perfil = perfis.find((p) => p.id === id);
    return perfil;
  },
};
