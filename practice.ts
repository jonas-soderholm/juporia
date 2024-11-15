console.log('Hello, TypeScript!');

export function add(a: number, b: number): number {
    return a + b;
}

export function sumTwoAdds(firstValue: number, secondValue: number): number {
    const firstAdd = add(firstValue, secondValue);
    const staticNumber: number = 5;
    return firstAdd + staticNumber;
}