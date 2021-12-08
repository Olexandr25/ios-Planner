import { ButtonWrapper, ButtonIconWrapper } from "./Button.styled"

const Button = props => {
  const { size, type, icon, onClick, isHover, isActive, children } = props

  return (
    <ButtonWrapper
      size="lg"
      type={type}
      onClick={onClick ? () => onClick() : null}
      isHover={isHover}
      isActive={isActive}>
        {(()=>{
          switch(size){
            case "lg":
              return ( icon );
          }



        })()}




      {/* {icon && props.children ? (
          <>
            <ButtonIconWrapper>{icon}</ButtonIconWrapper>
            {children}
          </>
        ) : icon ? (
          icon
        ) : children ? (
          children
        ) : null} */}
    </ButtonWrapper>
  )
}

export default Button
