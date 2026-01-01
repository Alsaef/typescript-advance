function fanNameNum(value:string|number) {
    if (value==='string') {
        return `My Name Is ${value}`
    }

    return value
}

console.log(fanNameNum('ratul'));

console.log(fanNameNum(22));