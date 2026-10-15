import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../actions/itemActions';

const ItemList = () => {
    // Читаємо масив items зі store
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    
    // Локальний стан для поля вводу
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        const text = inputValue.trim() || 'New Redux Item';
        dispatch(addItem(text));
        setInputValue(''); // Очищаємо поле
    };

    return (
        <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
            <h2>Redux Item List</h2>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter item name..."
                    style={{ flex: 1, padding: '8px' }}
                />
                <button onClick={handleAddItem} style={{ padding: '8px 16px', cursor: 'pointer' }}>
                    Add Item
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        padding: '10px', 
                        borderBottom: '1px solid #eee',
                        alignItems: 'center'
                    }}>
                        <span>{item}</span>
                        <button 
                            onClick={() => dispatch(removeItem(index))}
                            style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
