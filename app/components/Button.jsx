
const Button = ({children, variant}) => {
  return (
    <div className={`bg-gray-200 ${variant} w-fit px-10 py-2 rounded-full cursor-pointer`}>
        {children}
    </div>
  )
}

export default Button