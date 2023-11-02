type InputProps = {
   onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({onChangeHandler}: InputProps) {
  return <input type="text" onChange={(e) => onChangeHandler(e)}/>;
}

export default Input;
