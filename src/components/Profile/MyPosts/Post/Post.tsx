import React from 'react';
import s from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"/>
            {props.message}
            <div>
                {props.likesCount} <span>like</span>
            </div>
        </div>
    )

}

export default Post