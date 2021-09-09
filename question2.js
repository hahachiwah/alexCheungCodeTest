
let s = '{()[]{}{}}'   ////// input string s  in here       
let criteria = ['()', '[]', '{}']



function main(s) {
    let input = s;
    let loopChecker = [];
    let products = [''];
    while (loopChecker.length !== products.length) {
        loopChecker = products;
        products = checker(input);
        input = products
    }

    if(loopChecker.length == products.length && loopChecker.length !== 0){
        console.log(false)
    }else  if(loopChecker.length == products.length && loopChecker.length == 0){
        console.log(true)
    } 

}

function checker(input) {
    let inputs = Array.from(input)
    for (let xx in inputs) {
        let n = inputs[xx]
        let n1 = inputs[Number(xx) + 1]
        if (criteria.includes(`${n + n1}`)) {
            delete inputs[xx]
            delete inputs[Number(xx) + 1]
        }
    }
    inputs = inputs.filter((xx) => xx !== null)
    return inputs
}


main(s)

