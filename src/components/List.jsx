import React from 'react';

const List = ({href,text,className}) => {
    return (
        <li className={`${className}: pl-14 text-2xl font-semibold  text-black hover:text-orange-600 duration-300`}><a href={href}>{text}</a></li>
    );
};

export default List;