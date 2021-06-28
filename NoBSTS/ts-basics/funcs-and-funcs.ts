export function pringToFile(text: string, callback: () => void):void {
    console.log(text)
    callback()
}


// closure

export function createAdder(num: number) {
    return (val: number) => num + val
}

const addOne = createAdder(11)
console.log(addOne(3)) 