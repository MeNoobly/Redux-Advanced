import React, { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import { IPost } from '../types/IPost';
import PostItem from './PostItem';

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    // const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000
    // })
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation({});

    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleRemove = (post: IPost) => {
        deletePost(post);
    }
    
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    
    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3);
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    }
    
    return (
        <div>
            <div>
                <button onClick={handleCreate}>Добавить пользователя</button>
                {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>Произошла ошибка</h1>}
                {posts && posts.map(post => 
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;