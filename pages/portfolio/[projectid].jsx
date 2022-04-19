import React from "react";
import { useRouter } from "next/router";

const PortfolioDetail = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    return <div>PortfolioDetail</div>;
};

export default PortfolioDetail;
