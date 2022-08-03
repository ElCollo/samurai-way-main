import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Gleb</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Leon</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Kirill</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Roma</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Nikita</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>Hello</div>
                <div className={s.dialog}>Whats up?</div>
            </div>
        </div>
    )
}
export default Dialogs