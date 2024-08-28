const alunos = [
  { nome: 'João', nota: 7.5 },
  { nome: 'Maria', nota: 5 },
  { nome: 'Pedro', nota: 8 },
  { nome: 'Ana', nota: 3 },
  { nome: 'Lucas', nota: 4 },
  { nome: 'Carla', nota: 9 },
];

function filtrarAlunosAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
