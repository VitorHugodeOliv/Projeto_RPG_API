import { Armas } from "../models/Itens/ArmasModels";

export async function seedArmas() {
    const armas = [
      {
        nome: 'Espada Longa',
        descrição: 'Uma espada versátil usada com uma ou duas mãos.',
        categoria: "Arma" as "Arma",
        raridade: 'Comum',
        peso: 1.5,
        preco: 15,
        dano: '1d8',
        tipo: 'Corpo a Corpo' as 'Corpo a Corpo',
        alcance: '',
        propriedades: ['Versátil (1d10)'],
      },
      {
        nome: 'Arco Longo',
        descrição: 'Um arco poderoso com grande alcance.',
        categoria: "Arma" as "Arma",
        raridade: 'Comum',
        peso: 1,
        preco: 50,
        dano: '1d8',
        tipo: 'Distância' as 'Distância',
        alcance: '150/600',
        propriedades: ['Duas Mãos'],
      },
      {
        nome: 'Adaga',
        descrição: 'Pequena, leve e fácil de esconder.',
        categoria: "Arma" as "Arma",
        raridade: 'Comum',
        peso: 0.5,
        preco: 2,
        dano: '1d4',
        tipo: 'Híbrida' as 'Híbrida',
        alcance: '20/60',
        propriedades: ['Arremesso', 'Furtiva', 'Leve'],
      }
    ];
  
    for (const arma of armas) {
        await Armas.findOrCreate({
          where: { nome: arma.nome },
          defaults: arma,
        });
      }
  
    console.log('✅ Armas populadas com sucesso!');
  }