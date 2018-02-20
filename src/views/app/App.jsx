import React from 'react';
import './App.scss';

// Components
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
    return (
        <div my-app='app'>
            <div className='title'>{'Hello world!'}</div>
            <ClassComponent myProp='prop class component' />
            <ClassComponent />
            <FunctionalComponent myProp='prop functional component' />
            <FunctionalComponent />
        </div>
    );
}

export default App;