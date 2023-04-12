function* generateId(){
    let id = 1

    while(true){
        yield id
        id++
    }
}

const generatorObj = generateId()

console.log(generatorObj.next().value)
console.log(generatorObj.next().value)
console.log(generatorObj.next().value)
console.log(generatorObj.next().value)

// while (object.next().done !== false){
//     console.log(object.next().id) 
// }