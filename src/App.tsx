import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
    people: {
        name: string;
        age: number;
        url: string;
        note?: string;
    }[];
}

function App() {
    const [people, setPeople] = useState<IState['people']>([
        {
            name: 'test',
            url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
            age: 30,
            note: 'test note',
        },
    ]);

    return (
        <div className='App'>
            <h1>People Invited to my Party</h1>
            <List people={people} />
            <AddToList people={people} setPeople={setPeople} />
        </div>
    );
}

export default App;
