import React, { FC } from 'react';
import { IPostItemProps } from '../types/props/IPostItemProps';

const PostItem: FC<IPostItemProps> = (props) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        props.remove(props.post);
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        props.update({...props.post, title})
    }

    return (
        <div onClick={handleUpdate}>
            {props.post.id} {props.post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;