function projectEulerOne() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 5 === 0 || i % 3 === 0) sum += i
    }
    return sum;
}

console.log(projectEulerOne())

// Time: 0:44