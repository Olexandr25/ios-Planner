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
    fontWeight,
  } = props

  return (
    <>
      {icon && children ? (
        <ButtonWrapper
          data-testid="btn"
          type={type}
          color={color}
          isHovered={isHovered}
          isActive={isActive}
          className={className}
          size={size}
          borderType={borderType}
          borderRadius={borderRadius}
          onClick={onClick ? () => onClick() : null}
          fontWeight={fontWeight}>
          <ButtonIconWrapper>{icon}</ButtonIconWrapper>
          {children}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          data-testid="btn"
          type={type}
          color={color}
          isHovered={isHovered}
          isActive={isActive}
          className={className}
          size={size}
          borderType={borderType}
          borderRadius={borderRadius}
          onClick={onClick ? () => onClick() : null}
          fontWeight={fontWeight}>
          {icon || children}
        </ButtonWrapper>
      )}
    </>
  )
}

export default Button
