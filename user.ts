// accountInfo
//charInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

type CharInfo = {
  nickname: string;
  level: number;
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const account: AccountInfo = {
  id: 665,
  name: "Madruga",
  email: "madruga665@hotmail.com",
};

const char: CharInfo = {
  nickname: "madruga665",
  level: 665,
};

const player: PlayerInfo = {
  id: 665,
  name: "Madruga",
  email: "madruga665@hotmail.com",
  nickname: "madruga665",
  level: 665,
};
