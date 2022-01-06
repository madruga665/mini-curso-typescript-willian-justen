// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('xablau')
let message: string;
message = `xabalu ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ["teste", "xablau"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, boolean];
title = [1, "Xablau", true];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = true;
coisa = "xablau";
coisa = 5;

// void (vazio)
function logger(): void {
  console.log("xablau");
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;
cart = { chave: "valor" };

// Type Inference
let message2 = "mensagem definida";
message2 = "string nova";

window.addEventListener("click", (event) => {
  console.log(event.target);
});
