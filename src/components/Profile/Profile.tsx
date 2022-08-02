import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://images.drive.ru/i/3/6172c8bf1143d64b5fb9bf5f"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPost/>
        </div>)
}

export default Profile