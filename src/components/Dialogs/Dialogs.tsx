import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props: any) => {
    let path ="/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Gleb' id='1'/>
                <DialogItem name='Leon' id='2'/>
                <DialogItem name='Kirill' id='3'/>
                <DialogItem name='Roma' id='4'/>
                <DialogItem name='Vlad' id='5'/>
                <DialogItem name='Nikita' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hello'/>
                <Message message='Whats up?'/>
            </div>
        </div>
    )
}
export default Dialogs