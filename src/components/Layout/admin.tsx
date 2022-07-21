import React from "react";
import { LayoutProps } from "../../models/layout";
import Auth from "../Auth";

const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        <Auth>
            <div className="grid grid-cols-[200px,auto]">
                <div>Sidebar</div>
                <div>{children}</div>
            </div>
        </Auth>
    );
};

export default LayoutAdmin;
