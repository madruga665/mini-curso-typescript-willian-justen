// Type Alias

// Definição
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// Intersection
type GameCollectionT = GameT & DLCT;

// implements
class CreateGameT implements GameCollectionT {
  title: string;
  extra: string;

  constructor(title: string, extra: string) {
    this.title = title;
    this.extra = extra;
  }
}

// Declarar função
type getSimilarsT = (title: string) => void;

// =========== Diferenças =========== //

// Permite declarar tipos primitivos

type IDT = string | number;

// Pode declarar tuplas normalmente

type TuplaT = [number, string];

[1, "Xablau"] as TuplaT;

// Apenas uma declaração por escopo

type JQueryT = { a: string };

// mais recomendado: na maioria das vezes
// React - Props

//CONSISTÊNCIA
