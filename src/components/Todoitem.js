import React from 'react';
import MaterialIcon from 'material-icons-react'

export default props => {
    function handleChange (e) {
        const checked = e.target.checked
    }


    return (
        <li>
            <input id={'check' + props.id} onChange={handleChange} type="checkbox"/>
            <label htmlFor={'check' + props.id} className="replace"></label>
            <MaterialIcon icon="done"/>
            <label>(list goes here)</label>
            <button>x</button>
        </li>
    )
}