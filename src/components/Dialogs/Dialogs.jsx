import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <div className={s.dialog}><NavLink to='/dialogs/1'>Mike</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>Andrew</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Coco</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Frank</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>Maggie</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/6'>Ray</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Hi! How are you?</div>
                <div className={s.message}>Im fine, and you?</div>
            </div>
        </div>
    )
}

export default Dialogs;