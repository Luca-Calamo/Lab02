

function New(props) {
    return (
        <button className='new_container' onClick={props.onClick}>
            <h1 className='new_text'>{props.title}</h1>
        </button>
    );
}

export default New;
