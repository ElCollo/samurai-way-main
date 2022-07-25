import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className='s.posts'>
                <Post message='Hi, how are you?' likesCount='13'/>
                <Post message='It`s my first Post' likesCount='22'/>
            </div>
        </div>
    )
}
export default MyPost