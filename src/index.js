import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorker.register();
