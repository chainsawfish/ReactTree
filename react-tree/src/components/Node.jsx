import {useState} from "react";

const Node = ({nodes}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleOpen = () => {
        setIsVisible(!isVisible);
    };

    const toggleSelect = () => {

    }

    return (
        <div style={{paddingLeft: 30}}>


            <span onClick={toggleOpen}>{isVisible ? "- " : "+ "}</span>
            <span onClick={toggleSelect}>Node {nodes.id}</span>
            {isVisible ? (
                nodes?.children?.map((child) => {
                    return (
                        <div >
                            <Node  nodes={child}/>
                        </div>
                    );
                })
            ) : (
                <></>
            )}
        </div>
    );
}

export default Node;
