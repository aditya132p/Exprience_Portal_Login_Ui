const Text = (props) => {
    return (
        <h1 className={props.style}>
            {props.children}
        </h1>
    )
}

export default Text