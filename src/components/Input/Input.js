import {
  InputIcon,
  IconPosition,
  InputWrapper,
  ClassicInput,
  OutlinedInput,
} from "./Input.styled"

const Input = props => {
  const {
    variant,
    icon,
    placeholder,
    type,
    className,
    size,
    color,
    onChange,
    onBlur,
    onSubmit,
    value,
    autofocus
  } = props

  return (
    <InputWrapper data-testid="inputWrapper" onBlur={onBlur} onSubmit={onSubmit}>
      {variant === "classic" ? (
        <ClassicInput
          date-testid="inputClassic"
          type={type}
          className={className}
          onChange={onChange}
          size={size}
          value={value}
          autoFocus={autofocus}
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
            autoFocus={autofocus}
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
          autoFocus={autofocus}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      ) : null}
    </InputWrapper>
  )
}

export default Input
