import React from 'react';
import Container from './Container';
import Flexx from './Flexx';

const Reviews = ({number,text,className}) => {
    return (
        <div>
            <Container>
                <Flexx>
                    <div className={`${className}: py-14 px-14 bg-orange-300 text-black text-2xl font-bold border-r-4 border-orange-400`}>
                        <p>{number}</p><p>{text}</p>
                     </div>
            
                </Flexx>
            </Container>
        </div>
    );
};

export default Reviews;