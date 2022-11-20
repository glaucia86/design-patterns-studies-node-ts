/**
 * file: 04-module/optionalParam.ts
 * date: 11/20/2022
 * description: file responsible for the understand of optional function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

function enviarEmail(
  para: string,
  assunto: string = 'Sem assunto',
  remetente?: string
): void {
  console.log(`
    Para: ${para}
    Assunto: ${assunto}
    Remetente: ${remetente}
  `);
}

enviarEmail("email@email.com.br")
