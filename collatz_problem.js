const cache = new Map();

function calculateCollatzSequence(n) {
    const originalNumber = n;
    const sequence = [n];
    
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        sequence.push(n);
    }
    
    console.log(`${originalNumber} için Collatz dizisi:`, sequence.join(' → '));
    return sequence.length;
}

function findLongestCollatzSequence(limit) {
    let maxLength = 0;
    let numberWithMaxLength = 0;
    
    for (let i = 1; i < limit; i++) {
        const length = calculateCollatzSequence(i);
        
        if (length > maxLength) {
            maxLength = length;
            numberWithMaxLength = i;
            console.log(`Yeni en uzun dizi bulundu! Sayı: ${i}, Uzunluk: ${length}`);
        }
    }
    
    return {
        number: numberWithMaxLength,
        length: maxLength
    };
}

console.log("13 sayısı için test:");
calculateCollatzSequence(13);

console.log("\n1000'e kadar olan sayılar için en uzun dizi:");
const result = findLongestCollatzSequence(1000);
console.log(`\nSonuç:`);
console.log(`En uzun Collatz dizisini oluşturan sayı: ${result.number}`);
console.log(`Dizinin uzunluğu: ${result.length}`); 