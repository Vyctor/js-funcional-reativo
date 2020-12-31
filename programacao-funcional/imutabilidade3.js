const pessoa = {
  nome: "Vyctor",
  altura: "1.8",
  cidade: "Rio Verde",
};

// Atribuição por referência, outraPessoa terá o mesmo espaço de memória de pessoa
const outraPessoa = pessoa;

// Passagem por referência
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "Marcelo";
  return novaPessoa;
}

const novaPessoa = alteraPessoa(pessoa);

console.log(pessoa);
console.log(novaPessoa);
