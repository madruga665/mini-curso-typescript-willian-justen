"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('xablau')
let message;
message = `xabalu ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 0xff0;
// array (type[])
let items;
items = ["teste", "xablau"];
let values;
values = [1, 2, 3];
// tuple
let title;
title = [1, "Xablau", true];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL!
let coisa;
coisa = true;
coisa = "xablau";
coisa = 5;
// void (vazio)
function logger() {
    console.log("xablau");
}
// never
function error() {
    throw new Error("error");
}
// object
let cart;
cart = { chave: "valor" };
// Type Inference
let message2 = "mensagem definida";
message2 = "string nova";
window.addEventListener("click", (event) => {
    console.log(event.target);
});
