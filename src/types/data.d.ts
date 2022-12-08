// ポケモン
export type Pokemon = {
    id: number;
    name: string;
    firstType: number;
    secondType: number;
};

// ポケモンのタイプ
export type PokemonType = {
    id: number;
    name: string;
};
