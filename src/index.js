import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App.js';

const rootRef = document.getElementById('root');
const root = createRoot(rootRef);
root.render(<App/>)