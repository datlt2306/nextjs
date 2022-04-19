import { useRouter } from "next/router";
import React from "react";

const SelectedClientProjectPage = () => {
    const router = useRouter();
    console.log(router.query);
    return <div>The project page for specific Project for Selected Client</div>;
};

export default SelectedClientProjectPage;
