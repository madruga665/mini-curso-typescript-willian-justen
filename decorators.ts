// @Componenet
// @Selector
// @useState('name')

// Factory
function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} ${target}`);
  };
}

// Class decorator
@Logger("logger")
class Foo {}

function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

// decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API {}

console.log(new API());

// Property decorator
function minLength(length: number) {
  return (target: any, Key: string) => {
    let val = target[Key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: ${Key} must be at least ${length} characters`);
      } else {
        val = value;
      }
    };
    Object.defineProperty(target, Key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validação - se for menor que 5 - error
  @minLength(5)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const movie = new Movie("The Matrix");
console.log("Movie 1", movie.title);

const movie2 = new Movie("I am");
console.log("Movie 2", movie2);

// Method decorator
function delay(ms: number) {
  return (target: any, Key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Waiting ${ms}ms before calling ${Key}`);
      setTimeout(() => {
        original.apply(this, args);
      }, ms);
      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  // esperar um tempo e aí vai rodar o metodo (ms)
  @delay(5000)
  greet() {
    console.log(`Hello ${this.greeting}!`);
  }
}

const pessoinha = new Greeter("Pessoinha");
pessoinha.greet();

// Parameter decorator
// Acessor decorator
