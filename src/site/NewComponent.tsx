import React from "react";

type NewComponentType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number,
    name: string,
    age: number,
}
type NewComponentType2 = {
    topCars: Array<topCarsType>
}
type topCarsType = {
    manufacturer: string,
    model: string,
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span>{objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    );
};
export const NewComponent2 = (props:NewComponentType2) => {
    return(
        <table>
            {props.topCars.map((objectFromTopCarsArray,index)=>{
                return(
                    <tr>
                        <th key={index}>{objectFromTopCarsArray.manufacturer}</th>
                        <th key={index}>{objectFromTopCarsArray.model}</th>
                    </tr>
                )
            })}
        </table>
    );
};