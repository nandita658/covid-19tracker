import React from 'react';

import classes from './DropDownFilterList.module.css';

const DropDownFilterList = props => {
    const dropDownChangeHandler = event => {
        const sort = event.target.value;
        props.onChangeFilter(sort);
    };

    return (
        <form>
            <div className={classes.selectInput}>
                <select name="filters" id="filters" onChange={dropDownChangeHandler}>
                    <option value="select">select</option>
                    <option value="Increasing">Increasing</option>
                    <option value="Decreasing">Decreasing</option>
                </select>
            </div>
        </form>
    )
}

export default DropDownFilterList;