import {
  InputIcon,
  IconPosition,
  Wrapper,
  ClassicInput,
  OutlinedInput,
} from "./Input.styled"

const Input = props => {
  const { variant, icon, placeholder, type, className, size, color, onChange, onBlur } = props

  return (
    <Wrapper data-testid="inputWrapper" onBlur={onBlur} onChange={onChange}>
      {variant === "classic" ? (
        <ClassicInput
          date-testid="inputClassic"
          type={type}
          className={className}
          size={size} 
        />
      ) : variant === "styled" ? (
        <>
          <IconPosition data-testid="inputIconPosition" className={className}>
            {icon}
          </IconPosition>
          <InputIcon
            data-testid="inputStyled"
            placeholder={placeholder}
            type={type}
            className={className}
            size={size} 
          />
        </>
      ) : variant === "outlined" ? (
        <OutlinedInput
          data-testid="outlined"
          type={type}
          className={className}
          size={size}
          color={color}
          placeholder={placeholder} 
        />
      ) : null}
    </Wrapper>
  )
}

export default Input
