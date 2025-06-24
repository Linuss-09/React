function customRender(reactElement, container){

    /* 
    // using reactElement here so that it can be modular funtion and can be used for any element so thats why we are gonna acess its type 
    const domElement = document.createElement(reactElement.type)
    // we need to insert innherHTMl inside it as the container is empty rn 
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    // contianeer uthao and usme as a child domeElemtn ko inject kardo nigg
    container.appendChild(domElement)
    */
   
    // first ask the type of that mfkin element and create an html element
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // prop is basically props[i]
    for (const prop in reactElement.props) {
        // agarchildren likh diya kisk mc ne props ke andar then you should just ignore it by writing continue mfk
        if(prop === reactElement.children) continue
        domElement.setAttribute(prop, reactElement.props[prop])
        container.appendChild(domElement)
    }
    
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}

// that mfkin div from index.html
const mainContainer = document.querySelector('#root')

// basically a funtion that will add reactElement into the mainContainer and thats it
customRender(reactElement, mainContainer)