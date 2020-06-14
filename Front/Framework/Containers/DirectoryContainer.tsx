import {Component} from "react";
import * as React from "react";
import {Directory} from "../Components/Directory";
import {IPDirectoryContainer} from "../Props/IPDirectoryContainer";

export class DirectoryContainer extends Component<IPDirectoryContainer> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           this.props.directory.result.map((item) => {
                return (
                    <Directory
                        key={item.id}
                        item={item}
                    />
                );
            })
        )
    }
}
