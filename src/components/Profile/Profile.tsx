import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>)
}

export default Profile