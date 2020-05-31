import * as React from "react";
import {Header} from "./Header";

export const Wrapper: ({children}: any) => any = ({children}: any): any => (
    <div>
        <Header/>
        {children}
    </div>
);
