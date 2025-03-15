export const shuffleArray = <T>(arr: T[]): T[] => {
    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * (i + 1));
        
        // Swap the current element with the random element
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}
