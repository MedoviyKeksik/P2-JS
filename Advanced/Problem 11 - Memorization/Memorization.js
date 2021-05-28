function makeMemorized(func) {
    let results = {};
    return function memorized(arg) {
        if (typeof(results[arg]) == 'undefined') 
            return results[arg] = func(arg);
        else
            return results[arg];
    }
}
