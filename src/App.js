import React from 'react'
import { Provider } from 'react-redux';
import Store from './Store';
import DisplayPassword from './Components/DisplayPassword';
import GeneratePassword from './Components/GeneratePassword';
import './styles.css'

function App() {
    return(
        <Provider store={Store}>
            <main className='container'>
                <h1 className='title'>
                    Password Generator
                </h1>
                <DisplayPassword/>
                <GeneratePassword/>
            </main>
        </Provider>

    )
}

export default App;