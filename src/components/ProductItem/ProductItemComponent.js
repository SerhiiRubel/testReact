import React from 'react';

export default function ProductItemComponent (props) {
    const {
        title,
        file,
        isClick
    } = props;
    return (
        <div className={isClick ? 'productItem' : ''}>
            <img src={file} alt="img"/>
            <h3>{title}</h3>
        </div>
    );
}
