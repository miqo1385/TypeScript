"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with args=${args}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
function MyReadOnly(target, propertyKey) {
    let value = target[propertyKey];
    const getter = function () {
        return value;
    };
    const setter = function () {
        throw new Error(`Property ${propertyKey} is read-only.`);
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
class MyTestClass2 {
    constructor() {
        this._value = 10;
    }
    myMethod(x, y) {
        return x + y;
    }
    get value() {
        return this._value;
    }
}
__decorate([
    LogMethod
], MyTestClass2.prototype, "myMethod", null);
__decorate([
    MyReadOnly
], MyTestClass2.prototype, "value", null);
const obj = new MyTestClass2();
const result = obj.myMethod(5, 7);
console.log("Result of myMethod:", result);
console.log("Value before modification:", obj.value);
