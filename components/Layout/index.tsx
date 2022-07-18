import React from "react";
import { LayoutProps } from "../../models/layout";
import Header from "../Header";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
