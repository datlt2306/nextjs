import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { MainLayout } from '../layouts';

const Header = dynamic(() => import('@/components/common/header'), { ssr: false });
export interface IAboutProps {}

interface Post {
    id: number;
    title: string;
}

export default function About(props: IAboutProps) {
    const router = useRouter();
    const page = Number(router.query?.page) || 1;

    const [postList, setPostList] = React.useState<Post[]>([]);
    React.useEffect(() => {
        if (!page) return;
        (async () => {
            const response = await fetch(
                `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
            );
            const { data } = await response.json();
            setPostList(data);
        })();
    }, [page]);

    const handleClick = () => {
        router.push(
            {
                pathname: '/about',
                query: {
                    page: (Number(page) || 1) + 1,
                },
            },
            undefined,
            { shallow: true }
        );
    };
    return (
        <div>
            About page
            <Header />
            <ul className="post-list">
                {postList.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Next page</button>
        </div>
    );
}
About.Layout = MainLayout;
