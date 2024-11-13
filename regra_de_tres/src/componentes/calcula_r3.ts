export const calculaR3 = (a: number, b: number, c: number): number => { 
    if (a === 0) {
        return 0;
    }
    return (c * b) / a;
}