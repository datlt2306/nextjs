import { useAuth } from "@/hooks/use-auth";
import React, { useEffect } from "react";

type Props = {};

const Auth = ({ children }) => {
    const { data, profile } = useAuth();

    useEffect(() => {}, []);

    return <div>{children}</div>;
};

export default Auth;
