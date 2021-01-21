import React from 'react';
import './App.scss';

// Components
import ClassComponentWithStore from './02-application/99-modules/01-module1';

import ClassComponent from './01-core/components/98-class-component/ClassComponent';
import FunctionalComponent from './01-core/components/99-functional-component/FunctionalComponent';

function App() {
    return (
        <div my-app='app'>
            <div className='title'>{'Hello world!'}</div>
            <ClassComponent myProp='prop class component' />
            <ClassComponent />
            <FunctionalComponent myProp='prop functional component' />
            <FunctionalComponent />
            <ClassComponentWithStore />
        </div>
    );
}

export default App;