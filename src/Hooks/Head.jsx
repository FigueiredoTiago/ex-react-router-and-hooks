import { useEffect } from "react";

const Head = (props) => {
    useEffect(() => {
        document.title = props.title;
        //document.querySelector("'meta[name='description']").setAttribute('content', props.description);
        //descricao quando ouver vc altera.
    }, [props]);

    return <></>
}

export default Head;