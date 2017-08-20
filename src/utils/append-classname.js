const appendClassName = (defaultClassName: string, className: string) =>
    className ? `${defaultClassName} ${className}` : defaultClassName;

export default appendClassName;