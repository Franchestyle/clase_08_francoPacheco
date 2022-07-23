console.log("Fetch a JSON local");

const URL = "js/data/products.json"

function renderProducts( productos ) {
    productos .forEach( producto => {
        document.write(`<li> cancha: ${producto.cancha} - ${producto.dia} - ${producto.horario}Hs</li>`)
    })
}

fetch( URL )  
    .then( res => res.json() )
    .then( data => { renderProducts(data) })