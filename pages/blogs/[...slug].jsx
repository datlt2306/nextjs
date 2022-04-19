import { useRouter } from "next/router";
import React from "react";

const BlogPostPage = () => {
    const router = useRouter();

    console.log("query", router.query);
    return <div>BlogPostPage</div>;
};

export default BlogPostPage;
