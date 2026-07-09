export function isLeap(year: number): boolean {
    // Un año es bisiesto si es divisible por 4
    // Pero no es bisiesto si es divisible por 100 (a menos que también sea divisible por 400)
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}