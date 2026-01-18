type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small"
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, variant = "primary", size = "normal", ...props }: TButtonProps) => {
    const baseStyles = "inline-flex items-center gap-2 duration-300 justify-center cursor-pointer hover:scale-105";
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/85",
        dark: "bg-dark text-white hover:bg-dark/85",
        ghost: "bg-transparent text-dark hover:bg-gray-100"
    };
    const sizes = {
        normal: "text-base px-9 py-4",
        small: "text-sm px-7 py-[10px]"
    };

    return (
        <button {...props} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </button>
    );
};