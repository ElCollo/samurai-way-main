import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Gleb
                </div>
                <div className={s.dialog}>
                    Leon
                </div>
                <div className={s.dialog}>
                    Kirill
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
                <div className={s.dialog}>
                    Nikita
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