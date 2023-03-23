"use strict";
//Створіть клас Person з властивостями name, age та gender.
// Створіть ітератор, який проходиться по всіх властивостях об'єкта
// Person та повертає їхні значення:

class Person {
    constructor(name,age,gender) {
        this.name = name
        this.age = age
        this.gender = gender
        this[Symbol.iterator] = function* getProperty() {
            const entries = Object.entries(this)
            for(let i = 0; i < entries.length ; i++) {
                yield `${entries[i][0]} is ${entries[i][1]}`
            }
        }
    }
}

const person = new Person("John Doe", 30, "male");

for (const property of person) {       // 'name is John Doe'
    console.log(property)              // 'age is 30'
}                                       // 'gender is male'