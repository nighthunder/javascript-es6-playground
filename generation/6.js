function* generator(array){
    for (let index = 0; index < array.length; index++) {
        yield array[index]
    }
}

const generatorObject = generator([2,3,5])
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())