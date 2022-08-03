import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src="https://images.drive.ru/i/3/6172c8bf1143d64b5fb9bf5f"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>)
}

export default ProfileInfo