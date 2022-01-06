// type alias
type Uid = number | string;
type Plataform = "Windows" | "Linux" | "Mac Os";

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}

function renderPlataform(plataform: Plataform) {
  return plataform;
}

renderPlataform("Linux");

logDetails(69, "sapato");
logDetails("123", "sapato");

logInfo(69, "madruga");
logInfo("888", "Xablau");
