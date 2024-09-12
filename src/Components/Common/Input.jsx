
function Input(props) {
  return (
    // <input id={props.id} type={props.type} className={props.style} required placeholder={props.placeholder} />
    <input {...props} />
  )
}

export default Input