export interface CharacterData {
    id: string;
    nome: string;
    nivel?: number;
    raca: string;
    atributosEscolhidos: {
        forca: number;
        destreza: number;
        constituicao: number;
        inteligencia: number;
        sabedoria: number;
        carisma: number;
    };
    classe: string;
}