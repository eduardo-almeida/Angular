export function funcao(this: Date, nome: string, idade: number): void {
  console.log(this);
  console.log(nome);
  console.log(nome, idade);
}

//funcao("Luiz", 13)
funcao.call(new Date(), 'Monica', 12);
funcao.apply(new Date(), ['Eduardo', 14]);
