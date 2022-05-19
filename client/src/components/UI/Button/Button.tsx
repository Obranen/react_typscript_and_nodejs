import React, {FC} from 'react'
import classes from './Button.module.css'

interface IButton {
  onClick?: (e: any) => void
  children: React.ReactNode
}

const Button: FC<IButton> =
  ({children, ...props}) => {
    return (
      <button className={classes.Button} {...props}>
        {children}
      </button>
    )
  }

export default Button