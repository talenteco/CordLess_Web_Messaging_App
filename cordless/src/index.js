import React from 'react';
import {createRoot} from 'react-dom/client';
import individualContacts from './individualContacts';
const element = new individualContacts("Utkarsh");
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render([1,2,3].map(function()
{
    return(element.individualContact());;
}
    ));
console.log(element.state.contactName)

