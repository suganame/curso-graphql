let id = 1;
let idPerfil = 1;

function proximoId() {
  return id++;
}

const usuarios = [
  {
    id: proximoId(),
    nome: "João Silva",
    email: "jsilva@gmail.com",
    idade: 29,
    perfil_id: 2,
    status: "ATIVO",
  },
  {
    id: proximoId(),
    nome: "Rafael Junior",
    email: "rafajun@gmail.com",
    idade: 31,
    perfil_id: 1,
    status: "INATIVO",
  },
  {
    id: proximoId(),
    nome: "Daniela smith",
    email: "danismi@gmail.com",
    idade: 24,
    perfil_id: 2,
    status: "BLOQUEADO",
  },
];

function proximoIdPerfil() {
  return idPerfil++;
}

const perfis = [
  {
    id: proximoIdPerfil(),
    nome: "Administrador",
  },
  {
    id: proximoIdPerfil(),
    nome: "Comum",
  },
];

module.exports = { usuarios, perfis, proximoId, proximoIdPerfil };
