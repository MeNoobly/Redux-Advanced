import { IPost } from './../IPost';

export interface IPostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}