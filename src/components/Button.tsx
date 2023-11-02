type ButtonProps = {
   onclick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({onclick}: ButtonProps) {
   return <button type="button" onClick={onclick}>
      Button
   </button>;
}

export default Button;
