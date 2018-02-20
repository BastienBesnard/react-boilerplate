import React from 'react';
import './App.scss';

// Components
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
    return (
        <div my-app='app'>
            {'Hello world!'}
            <ClassComponent myProp='prop class component' />
            <ClassComponent />
            <FunctionalComponent myProp='prop functional component' />
            <FunctionalComponent />
        </div>
    );
}

export default App;