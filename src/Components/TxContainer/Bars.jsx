import React from 'react'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import './txContainer.css'

const Bars = ({ title, value, cls }) => {
    return (
        <div className={'expense_div ' + cls}>
            <div>
                <p>{title}</p>
                <LocalAtmIcon className={cls} />
            </div>
            <p>{value}$</p>
        </div>
    )
}

export default Bars