import React from 'react'
import DisplayPassword from './Components/DisplayPassword';
import GeneratePassword from './Components/GeneratePassword';
import './styles.css'

function App() {
    return(
        <main className='container'>
            <h1 className='title'>
                Password Generator!
            </h1>
            <DisplayPassword/>
            <GeneratePassword/>
        </main>
    )
}

export default App;