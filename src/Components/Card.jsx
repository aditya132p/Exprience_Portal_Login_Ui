const Card = (props) => {
  return (
      <div className="w-full max-w-md bg-white p-10 rounded-lg drop-shadow-sm ">{props.children}</div>
  )
}

export default Card