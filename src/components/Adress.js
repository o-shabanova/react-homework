import React from 'react';

export function Adress(props) {
    return <div>
        <p> Адреса:</p>
        <p> {props.address.street}</p>
        <p>{props.address.city}</p>
        <p>{props.address.postIndex}</p>
        <p>{props.address.country}</p>
    </div>

}

// export const Adress = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <p> Адреса:</p>
//             <p>Вулиця: {props.address.street}</p>
//             <p>Місто: {props.address.city}</p>
//             <p>Індекс: {props.address.postIndex}</p>
//             <p>Країна: {props.address.country}</p>
//         </div>
//     );
// }