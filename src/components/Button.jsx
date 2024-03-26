const Button = ({children, ...props}) => {
    const classes = "px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-50";
    return (
        <button
            className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;