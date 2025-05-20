
const ReactElement={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    content:"click me to visit google!"
}

const container=document.querySelector('#root');

function CustomRender(ReactElement,container){
    const DomElement=document.createElement(ReactElement.type);
    /*
    DomElement.setAttribute('href',ReactElement.props.href);
    DomElement.setAttribute('target',ReactElement.props.target);
    DomElement.innerHTML=ReactElement.content;
    */
   for (const prop in ReactElement.props) {
   if(prop==='content') continue;
   DomElement.setAttribute(prop,ReactElement.props.prop)
   }
   DomElement.innerHTML=ReactElement.content;
    container.appendChild(DomElement);
}

CustomRender(ReactElement,container);