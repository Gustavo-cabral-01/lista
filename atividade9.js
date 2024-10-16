const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'amanda', nota: 3},
    { nome: 'João', nota: 7 }
]

function resultadoalunos(alunos) {
    alunos.forEach(aluno => {
        const status = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado';
        console.log(`${aluno.nome}: ${status}`)
    })
}

console.log[resultadoalunos(alunos)];
