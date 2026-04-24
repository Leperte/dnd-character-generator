function diceroll() {
    let results = [];
    for (let i = 0; i < 4; i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        results.push(dice);
    }
    
    results.sort((a, b) => b - a)
    
    let lowest = results[3];
    
    return {
        rolls: results,
        dropped: lowest,
        total: results.slipe(0, 3).reduce((sum, val) => sum + val, 0)
    };
}

console.log(diceroll());
