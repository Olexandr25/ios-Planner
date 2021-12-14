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
        onClick={onClick}
        fontWeight={fontWeight}>
        {icon && children ? (
          <>
            <ButtonIconWrapper>{icon}</ButtonIconWrapper>
            {children}
          </>
        ) : (
          <>{icon || children}</>
        )}
      </ButtonWrapper>
  )
}

export default Button
