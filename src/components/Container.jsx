import React from 'react';

const Container = ({children,className}) => {
    return (
        <div className={'${className}: max-w-container mx-auto bg-primaryColor'}>
           {children} 
        </div>
    );
};

export default Container;