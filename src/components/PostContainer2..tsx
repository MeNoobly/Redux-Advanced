import React, { useState } from 'react';
import { postAPI } from '../services/PostService';
import { IPost } from '../types/IPost';
import PostItem from './PostItem';

const PostContainer2 = () => {
    const [limit, setLimit] = useState(100);
    
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleRemove = (post: IPost) => {
        deletePost(post);
    }
    
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div>
                {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>Произошла ошибка</h1>}
                {posts && posts.map(post => 
                    <PostItem remove={handleRemove} update={handleUpdate} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer2;