"use strict";
// @Componenet
// @Selector
// @useState('name')
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Factory
function Logger(prefix) {
    return (target) => {
        console.log(`${prefix} ${target}`);
    };
}
// Class decorator
let Foo = class Foo {
};
Foo = __decorate([
    Logger("logger")
], Foo);
function setAPIVersion(apiVersion) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = apiVersion;
            }
        };
    };
}
// decorator - anotar a versão da API
let API = class API {
};
API = __decorate([
    setAPIVersion("1.0.0")
], API);
console.log(new API());
// Property decorator
function minLength(length) {
    return (target, Key) => {
        let val = target[Key];
        const getter = () => val;
        const setter = (value) => {
            if (value.length < length) {
                console.log(`Error: ${Key} must be at least ${length} characters`);
            }
            else {
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
    constructor(title) {
        this.title = title;
    }
}
__decorate([
    minLength(5)
], Movie.prototype, "title", void 0);
const movie = new Movie("The Matrix");
console.log("Movie 1", movie.title);
const movie2 = new Movie("I am");
console.log("Movie 2", movie2);
// Method decorator
function delay(ms) {
    return (target, Key, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Waiting ${ms}ms before calling ${Key}`);
            setTimeout(() => {
                original.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}
class Greeter {
    constructor(greeting) {
        this.greeting = greeting;
    }
    // esperar um tempo e aí vai rodar o metodo (ms)
    greet() {
        console.log(`Hello ${this.greeting}!`);
    }
}
__decorate([
    delay(5000)
], Greeter.prototype, "greet", null);
const pessoinha = new Greeter("Pessoinha");
pessoinha.greet();
// Parameter decorator
// Acessor decorator
