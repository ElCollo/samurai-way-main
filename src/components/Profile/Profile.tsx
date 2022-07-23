import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://images.drive.ru/i/3/6172c8bf1143d64b5fb9bf5f"/>
        </div>
        <div> ava + description</div>
        <div> My posts
            <div>New posts</div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}
export default Profile