const Text = (props) => {
    return (
        <h1 {...props}>
            {props.children}
        </h1>
    )
}

export default Text