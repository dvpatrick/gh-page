const returnDates = (date, valor) => {
  let mes = 3;
  let ano = 2022;

  const boletos = [];
  for (let i = 0; i < valor; i++) {

    mes ++
    if (mes > 12) {
      console.log("> q 11");
      mes = 1;
    }
    console.log(`BOLETO REFERENTE AO MES DE: 01/${mes}/${ano}`);
  boletos.push(`01/${mes}/${ano}`)
  };
  console.log(boletos);
}
returnDates(10, 12);


// pseudoCodigo;
// funcao (data, quantidade) {
//   var mes = mes_extraido_da_data;
//   var ano = ano_extraido_da_data;
//   var boletos = [];

//   loopFor_Limitado_Por_Quantidade_De_Boletos_Que_Você_Quer_Gerar(quantidade) {
//     mes ++
//     if (logica para verificar se o mes é maior que 12) {
//       mes = 1;
//       ano ++;
//     }
//     boletos.push(`01/${mes}/${ano}`);
//   }
//   return boletos;
// }