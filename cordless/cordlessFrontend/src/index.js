import {createRoot} from 'react-dom/client';
import MainUser from './components/mainUser';

const port=4000
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    < MainUser />
);


