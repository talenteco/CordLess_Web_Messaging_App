import React from 'react';
import {createRoot} from 'react-dom/client';
import individualContacts from './components/individualContacts';



const domNode = document.getElementById('root');
const root = createRoot(domNode);


root.render([["Utkarsh", 1],["David",2],["Raj",3]].map(function([a,b])
{
    const element = new individualContacts(a, b);
    return(element.individualContact());;
}
));

