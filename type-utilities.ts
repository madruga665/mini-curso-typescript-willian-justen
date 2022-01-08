type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly
const todo: Readonly<Todo> = {
  title: "Learn TypeScript",
  description: "Learn TypeScript and build a todo app",
  completed: false,
};

console.log(todo);

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2 = updateTodo(todo, { completed: true });

console.log(todo2);

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Learn Dart",
  completed: false,
};

console.log(todo3);

// Omit
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview2 = {
  title: "Learn Docker",
  completed: false,
};
