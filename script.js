function adicionaItem(event) {
    const containerElement = document.getElementById('container');
    const newelement = document.createElement('article');
    const novoitem = document.createTextNode('Novo item')
    newelement.append(novoitem);
    containerElement.insertAdjacentElement('beforeend', newelement)

    newelement.setAttribute('class', 'item')
    newelement.setAttribute('onclick', 'removeItem(event)')
    console.log(novoitem);
    console.log(newelement);
}

function removeItem(event) {
    event.target.remove()
}