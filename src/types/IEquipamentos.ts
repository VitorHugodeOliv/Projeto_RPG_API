type CategoriaEquipamentos = 'Arma' | 'Armadura' | 'Equipamento de Aventura' | 'Ferramenta' | 'Outros';

export interface EquipamentoBase {
    nome: string;
    descricao?: string;
    categoria: CategoriaEquipamentos;
    raridade?: string;
    peso: number;
    preco: number;
};

export interface Arma extends EquipamentoBase {
    categoria: 'Arma';
    dano: string;
    tipo: 'Corpo a Corpo' | 'Distância' | 'Híbrida';
    alcance?: string;
    propriedades?: string[];
}

export interface Armadura extends EquipamentoBase {
    categoria: 'Armadura';
    tipo: 'Leve' | 'Média' | 'Pesada' | 'Escudo';
    CA: number;
    forcaMinima?: number;
    desvantagem?: boolean;
    penalidadeDeslocamento?: number;
}

export interface EquipamentoAventura extends EquipamentoBase {
    categoria: 'Equipamento de Aventura';
}

export interface Ferramenta extends EquipamentoBase {
    categoria: 'Ferramenta';
    tipo?: string;
    uso?: string;
}

export interface Outros extends EquipamentoBase {
    categoria: 'Outros';
}

export type Equipamento = Arma | Armadura | EquipamentoAventura | Ferramenta | Outros;
