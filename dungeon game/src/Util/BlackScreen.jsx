import '../css/index.css';

function BlackScreen(props){
    return(
        <div id="blackscreen" style={{opacity: props.opacity, visibility: props.visibility}}></div>
    )
}

export default BlackScreen;