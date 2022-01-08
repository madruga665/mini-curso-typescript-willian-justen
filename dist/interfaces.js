"use strict";
const tlou = {
    title: "The Last of Us",
    description: "A survival horror game",
    genre: "Survival Horror",
    plataform: ["PS4", "XBOX", "PC"],
    getSimilars(title) {
        console.log(`Similar games to ${title}: Uncharted, The Witcher`);
    },
};
console.log(tlou);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftBehind = {
    title: "Left Behind",
    description: "A survival horror game",
    genre: "Survival Horror",
    plataform: ["PS4", "XBOX", "PC"],
    originalGame: tlou,
    newContent: ["New content 1", "New content 2"],
};
class CreateGame {
    constructor(title, description, genre, plataform) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.plataform = plataform;
    }
}
