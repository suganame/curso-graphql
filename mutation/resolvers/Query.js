const { usuarios, perfis } = require("../data/db");

function indiceUsuario(filtro) {
  if (!filtro) return -1;
  const { id, email } = filtro;
  if (id) {
    return usuarios.findIndex((u) => u.id === id);
  } else if (email) {
    return usuarios.findIndex((u) => u.email === email);
  }
  return -1;
}

module.exports = {
  usuarios() {
    return usuarios;
  },
  usuario(_, { filtro }) {
    const indice = indiceUsuario(filtro);
    if (indice < 0) return null;
    return usuarios[indice];
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const perfil = perfis.find((p) => p.id === id);
    return perfil;
  },
};
