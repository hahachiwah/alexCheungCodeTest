let fetch = require('node-fetch')
let arrayOfContracts = ['BTC', 'ETH']
async function renderQuotes() {
    const res = await fetch(`https://ftx.com/api/markets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let result = await res.json()
    let future = result.result.filter(
        (xx) => xx.type === 'future'
            && arrayOfContracts.includes(xx.underlying));
    // console.log('/////////////future////////////')
    // console.log( future)
    // console.log('/////////////future////////////')
    let SPOT = result.result.filter((xx) => xx.underlying === 'BTC'|| xx.underlying === 'ETH');
    console.log('/////////////SPOT////////////')
    // console.log( SPOT)
    console.log('/////////////SPOT////////////')
    SPOT.map((xx) => console.log(xx.name, xx.underlying, xx.type))
}

renderQuotes();