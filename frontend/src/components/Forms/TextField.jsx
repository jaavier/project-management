import React from 'react';

export default function TextField(props) {
    const className = 'form-control border border-gray-700 rounded-sm p-1 outline-none w-full';
    return (
        <div className="mb-2 mr-5 flex-1">
            <div className="pb-2">
                <label htmlFor={props.name} className="font-light">{props.label}</label>
            </div>
            <div className="flex-1">
                {
                    !props.multiline ? <input
                        className={className}
                        type={props.type}
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    /> : <textarea
                        className={className}
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        rows={props.rows}
                        placeholder={props.placeholder}
                    />
                }
            </div>
        </div>
    );
}
