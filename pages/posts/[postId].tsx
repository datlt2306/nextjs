import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

type PostDetailPostPageProps = {
    post: {
        id: number;
        title: string;
    };
};
type Post = {
    id: number;
    title: string;
};
const PostDetailPostPage = (props: PostDetailPostPageProps) => {
    const router = useRouter();
    return (
        <div>
            <h1>{props.post.title}</h1>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    console.log('GET STATIC PATH');
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts');
    const data = await response.json();
    return {
        paths: data.map((post: Post) => ({ params: { postId: post.id } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const postId = context.params?.postId;
    console.log('postId', postId);
    if (!postId) {
        return { notFound: true };
    }
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
    const data = await response.json();
    return {
        props: {
            post: { id: data.id, title: data.title },
        },
    };
};

export default PostDetailPostPage;
