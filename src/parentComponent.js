import React ,{Component} from "react";
import FirstChild from "./firstChild";

class ParentComponent extends Component {
    render() {
        return (
            <h1>
            I'm the parent component
            <FirstChild/>
            </h1>
        )

    }
}

const ParentComponent1 = () => {
    return (
        <h1>
            Parent Component
            <FirstChild/>
        </h1>
    )
}


export default ParentComponent1;