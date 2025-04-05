import { Personagem } from '../Character';
import { Raca } from '../../types/RacaInterface';
import { Atributos } from '../../types/IAtributos';


interface SlotsDeMagia {
  [nivel: number]: number;
}

export class Feiticeiro extends Personagem {
  truquesConhecidos: number;
  slotsDeMagia: SlotsDeMagia;

  constructor(id: string, nome: string, nivel: number = 1, raca: Raca, atributosEscolhidos: Atributos, classe: string) {
    super(id, nome, nivel, raca, atributosEscolhidos, classe = 'Feiticeiro');
    this.hp = this.calcularHP();
    this.id = id;
    this.truquesConhecidos = this.getTruquesConhecidos(nivel);
    this.slotsDeMagia = this.getSlotsDeMagia(nivel);
  }

  protected calcularHpBase(): number {
    let hpBase = 0
    if (this.nivel >= 1) {
      hpBase += 6 + this.atributos.constituicao
    }
    if (this.nivel > 1) {
      hpBase += (this.nivel - 1) * (4 + this.atributos.constituicao)
    }
    return hpBase

  }

  protected calcularHP(): number {
    return this.calcularHpBase()
  }

  private getTruquesConhecidos(nivel: number): number {
    if (nivel <= 3) return 4;
    if (nivel <= 9) return 5;
    return 6;
  }

  private getSlotsDeMagia(nivel: number): SlotsDeMagia {
    const tabelaDeMagia: { [nivel: number]: { [key: number]: number } } = {
        1: { 1: 2 },
        2: { 1: 3 },
        3: { 1: 4, 2: 2 },
        4: { 1: 4, 2: 3 },
        5: { 1: 4, 2: 3, 3: 2 },
        6: { 1: 4, 2: 3, 3: 3 },
        7: { 1: 4, 2: 3, 3: 3, 4: 1 },
        8: { 1: 4, 2: 3, 3: 3, 4: 2 },
        9: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
        10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
        11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
        12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
        13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
        14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
        15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
    };

    return tabelaDeMagia[nivel] || {};
  }
}
