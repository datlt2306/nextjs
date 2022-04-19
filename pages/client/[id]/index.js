import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
    const router = useRouter();
    const loadProjectHandler = () => {
        router.push({
            pathname: "/client/[id]/[clientprojectid]",
            query: { id: "max", clientprojectid: "projecta" },
        });
    };
    return (
        <div>
            <button onClick={loadProjectHandler}>Click me</button>
        </div>
    );
};

export default ClientProjectPage;
