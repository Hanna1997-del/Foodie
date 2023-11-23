interface ButtonProps {
    type: "submit" | "button"
    title: string
    icon?: string
    variants: string
}
 
const Button: React.FC<ButtonProps> = ({type,title,icon,variants}) => {
    return ( 
    <button type={type} className={variants}>{icon} {title}</button>
    
    );
}
 
export default Button;