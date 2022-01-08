// Interfaces

// Definição
interface GameI {
  title: string;
}

interface DLCI {
  extra: string;
}

// Intersection | extends
interface GameCollection extends GameI, DLCI {}

// Implements
class CreateGameI implements GameCollection {
  title: string;
  extra: string;

  constructor(title: string, extra: string) {
    this.title = title;
    this.extra = extra;
  }
}

// Declarar função
interface getSimilarsI {
  (title: string): void;
}

// =========== Diferenças =========== //

// Não  consigo definir Tuplas na interface

interface Tuple {
  0: number;
  1: number;
}

[1, 2, 3, "Xablau"] as Tuple;

interface JQuery {
  a: string;
}
interface JQuery {
  b: string;
}

const xablau: JQuery = { a: "Xablau1", b: "Xablau2" };

// vantagem: quando estiver criando libs, prefira interfaces, porque sãpo mais extensíveis!

// criando objetos/classes (POO)
