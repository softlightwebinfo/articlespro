import * as React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Wrapper: ({children}: any) => any = ({children}: any): any => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
);
