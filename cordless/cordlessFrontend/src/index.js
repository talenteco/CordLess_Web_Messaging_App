import {createRoot} from 'react-dom/client';
import MainPage from './components/MainPage';

const port=4000
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    < MainPage className= "entirePage" portForMain={port} />
);


