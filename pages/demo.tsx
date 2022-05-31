import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export interface IDemoPostsProps {
    products: any[];
}

export default function DemoPosts({ products }: IDemoPostsProps) {
    console.log('products', products);
    // const [productList, setProductList] = useState<any>([]);
    // useEffect(() => {
    //     (async () => {
    //         const data = await (await fetch('./api/posts')).json();
    //         setProductList(data);
    //     })();
    // }, []);
    return (
        <div id="list">
            {products.map((item: any) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await (await fetch('http://localhost:3000/api/posts')).json();
    return {
        props: {
            products: data.map((post: any) => ({
                id: post.id,
                title: post.title,
                author: post.author,
            })),
        },
    };
};
