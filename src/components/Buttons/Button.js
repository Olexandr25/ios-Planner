import { ButtonWrapper, ButtonIconWrapper } from "./Button.styled"

const Button = props => {
  const {
    icon,
    children,
    onClick,
    type,
    color,
    isHovered,
    isActive,
    className,
    size,
    borderType,
    borderRadius,
  } = props

  return (
    <>
      {icon && children ? (
        <ButtonWrapper
          type={type}
          color={color}
          isHovered={isHovered}
          isActive={isActive}
          className={className}
          size={size}
          borderType={borderType}
          borderRadius={borderRadius}
          onClick={onClick ? () => onClick() : null}>
          <ButtonIconWrapper>{icon}</ButtonIconWrapper>
          {children}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          type={type}
          color={color}
          isHovered={isHovered}
          isActive={isActive}
          className={className}
          size={size}
          borderType={borderType}
          borderRadius={borderRadius}
          onClick={onClick ? () => onClick() : null}>
          {icon || children}
        </ButtonWrapper>
      )}
    </>
  )
}

export default Button
