import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';

type PostListPageProps = {
    posts: any[];
};
type Post = {
    id: number;
    title: string;
};
const PostListPage = ({ posts }: PostListPageProps) => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    );
};

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
    context: GetStaticPropsContext
) => {
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts');
    const data = await response.json();
    return {
        props: {
            posts: data.map((post: Post) => ({ title: post.title, id: post.id })),
        },
    };
};

export default PostListPage;
