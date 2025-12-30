let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function obterMedia(notas) {
    let soma = 0;
    notas.forEach((nota) => {
      soma += nota;
    });
    return soma / notas.length;
  }

for(let i = 0; i < atletas.length; i++) {
  let atleta = atletas[i];

  atleta.notas.sort((a, b) => a - b);

  let notasValidas = [];

  for(let j = 0; j < atleta.notas.length; j++) {
    if(j !== 0 && j !== atleta.notas.length - 1) {
      notasValidas.push(atleta.notas[j]);
    }
  }

  let mediaCalculada = obterMedia(notasValidas)

  let resultadoAtletas = `Atleta: ${atleta.nome} \nNotas Obtidas: ${atleta.notas.join(", ")} \nMédia Válida: ${mediaCalculada}`;
  
  console.log(resultadoAtletas);
}



