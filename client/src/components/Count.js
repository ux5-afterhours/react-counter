import React from 'react';
import styled, { keyframes } from 'styled-components';

const Label = styled.p`
    font-size: 40px;
    font-weight: bold;
    /*if (props.count % 2 === 0){
        do this
        else {
            do that
        }*/
    color: ${props => (props.count % 2 === 0 ? 'blue' : 'red')};
`;

// const spinning = keyframes`
//     from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Number = styled.div`
// animation: ${props =>
//     props.count % 2 === 0
//         ? `${spinning} infinite 20s linear`
//         : `${spinning} infinite reverse 20s linear`};
//     /* animation: ${spinning} infinite 20s linear; */
// `;

const Count = props => {
    return (
        <div>
            <Label count={props.currentCount}>Count:</Label>
            <p>{props.currentCount}</p>
        </div>
    );
};

export default Count;
