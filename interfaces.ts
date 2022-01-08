interface Game {
  title: string;
  description: string;
  readonly genre: string;
  plataform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "A survival horror game",
  genre: "Survival Horror",
  plataform: ["PS4", "XBOX", "PC"],
  getSimilars(title: string): void {
    console.log(`Similar games to ${title}: Uncharted, The Witcher`);
  },
};

console.log(tlou);
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: "Left Behind",
  description: "A survival horror game",
  genre: "Survival Horror",
  plataform: ["PS4", "XBOX", "PC"],
  originalGame: tlou,
  newContent: ["New content 1", "New content 2"],
};

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  plataform?: string[];
  getSimilars?: (title: string) => void;

  constructor(title: string, description: string, genre: string, plataform?: string[]) {
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.plataform = plataform;
  }
}
