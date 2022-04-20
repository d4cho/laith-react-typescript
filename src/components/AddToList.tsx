import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
    people: Props['people'];
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList = (props: IProps) => {
    const { people, setPeople } = props;
    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) {
            return;
        }

        setPeople([
            ...people,
            {
                name: input.name,
                url: input.img,
                age: +input.age,
                note: input.note,
            },
        ]);

        setInput({
            name: '',
            age: '',
            note: '',
            img: '',
        });
    };

    return (
        <div className='AddToList'>
            <input
                className='AddToList-input'
                type='text'
                placeholder='Name'
                value={input.name}
                onChange={(e) => handleChange(e)}
                name='name'
            />
            <input
                className='AddToList-input'
                type='text'
                placeholder='Age'
                value={input.age}
                onChange={(e) => handleChange(e)}
                name='age'
            />
            <input
                className='AddToList-input'
                type='text'
                placeholder='Image URL'
                value={input.img}
                onChange={(e) => handleChange(e)}
                name='img'
            />
            <textarea
                className='AddToList-input'
                placeholder='Notes'
                value={input.note}
                onChange={(e) => handleChange(e)}
                name='note'
            />
            <button className='AddToList-btn' onClick={handleClick}>
                Add to List
            </button>
        </div>
    );
};

export default AddToList;
