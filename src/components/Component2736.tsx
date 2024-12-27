
import React from 'react';

interface Component2736Props {
    value: number;
    onValueChange: (newValue: number) => void;
}

export const Component2736: React.FC<Component2736Props> = ({ value, onValueChange }) => {
    return (
        <div className="p-4 border rounded-md">
            <h2 className="text-lg font-bold">Component 2736</h2>
            <div className="flex items-center gap-2 mt-2">
                <button 
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                    onClick={() => onValueChange(value - 1)}
                >
                    -
                </button>
                <span>{value}</span>
                <button 
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                    onClick={() => onValueChange(value + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};
