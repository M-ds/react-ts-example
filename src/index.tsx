import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@ui5/webcomponents-fiori/dist/generated/json-imports/Themes";
import "@ui5/webcomponents-theming/dist/Assets.js";
import "@ui5/webcomponents/dist/generated/json-imports/Themes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
