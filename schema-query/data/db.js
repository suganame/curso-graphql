const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "jsilva@gmail.com",
    idade: 29,
    perfil_id: 2,
    status: "ATIVO",
  },
  {
    id: 2,
    nome: "Rafael Junior",
    email: "rafajun@gmail.com",
    idade: 31,
    perfil_id: 1,
    status: "INATIVO",
  },
  {
    id: 3,
    nome: "Daniela smith",
    email: "danismi@gmail.com",
    idade: 24,
    perfil_id: 2,
    status: "BLOQUEADO",
  },
];

const perfis = [
  {
    id: 1,
    nome: "Administrador",
  },
  {
    id: 2,
    nome: "Comum",
  },
];

module.exports = { usuarios, perfis };
