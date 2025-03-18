function calculaIdadeUsuario() {

    const prompt = require('prompt-sync')();
    let ano = Number(prompt("Digite seu ano de nascimento: "))

    const currentYear  = new Date().getFullYear()

    let resu = currentYear - ano

    console.log(`${resu}`)

}

calculaIdadeUsuario()

// MELHOR FORMA DE FAZER O CÓDIGO ACIMA

const readline = require('readline');

// Criando a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculaIdadeUsuario() {
  rl.question('Digite seu ano de nascimento: ', (ano) => {
    const anoNascimento = Number(ano);

    // Verificar se a entrada é um número válido
    if (isNaN(anoNascimento)) {
      console.log("Por favor, insira um ano válido.");
      rl.close();
      return;
    }

    const currentYear = new Date().getFullYear();
    const idade = currentYear - anoNascimento;

    console.log(`Sua idade é: ${idade} anos.`);
    
    rl.close();  // Fechar a interface após o uso
  });
}

calculaIdadeUsuario();
