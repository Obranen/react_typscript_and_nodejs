import React, {FC} from 'react'
import classes from './ButtonAnswer.module.css';

interface IButtonAnswer {
  onClick?: (e: any) => void
  style?: any
  children: React.ReactNode
}

const ButtonAnswer: FC<IButtonAnswer> =
  ({children, ...props}) => {
    return (
      <button className={classes.ButtonAnswer} {...props}>
        {children}
      </button>
    )
  }

export default ButtonAnswer