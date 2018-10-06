import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Table extends Component{
    render(){
        const {characterData, removeCharacter} = this.props;
        return (
            <table >
                <TableHead/>
                <TableBody characterData = {characterData} removeChar={removeCharacter} />
            </table>
        );
    }
}

const TableHead = () => {
    return (
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Remove</th>
        </tr>
        </thead>
    )
};
const TableBody = props => {
    const rows = props.characterData.map((row, index)=> {
        return (
            <tr key={index}>
                <td>{row.key}</td>
                <td>{row.value}</td>
                <td><button onClick={() => props.removeChar(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
};
export default Table;
