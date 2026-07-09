export function decodedValue(colors: string[]): number {
    const colorValues: Record<string, number> = {
        'black': 0,
        'brown': 1,
        'red': 2,
        'orange': 3,
        'yellow': 4,
        'green': 5,
        'blue': 6,
        'violet': 7,
        'grey': 8,
        'white': 9,
    };

    // Extract the first two colors (if available)
    const firstColor = colors[0]?.toLowerCase();
    const secondColor = colors[1]?.toLowerCase();

    // Calculate the numeric value based on the colors
    const value = (colorValues[firstColor] || 0) * 10 + (colorValues[secondColor] || 0);

    return value;
}

