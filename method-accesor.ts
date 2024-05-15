// Method Decorator: LogMethod
function LogMethod(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    const originalMethod = descriptor.value;

    // Wrapping the original method
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with args=${args}`);
        return originalMethod!.apply(this, args);
    };

    // Returning the updated descriptor
    return descriptor;
}



// Accessor Decorator: MyReadOnly
function MyReadOnly(target: any, propertyKey: string) {
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

// Sample class to test decorators
class MyTestClass2 {
    private _value: number = 10;

    @LogMethod
    myMethod(x: number, y: number): number {
        return x + y;
    }

    @MyReadOnly
    get value(): number {
        return this._value;
    }
}

// Testing method and accessor decorators
const obj = new MyTestClass2();

// Testing method decorator
const result = obj.myMethod(5, 7);
console.log("Result of myMethod:", result);

// Testing accessor decorator
console.log("Value before modification:", obj.value);
// obj.value = 20; // Uncommenting this line should throw an error
