import React, {FC} from 'react'
import classes from './Input.module.css'

interface IInput {
  type: string
  placeholder?: string
  value?: string
  ref?: string
  onChange?: (e: any) => void
}

const Input: FC<IInput> =
  ({...props}) => {
    return (
      <input className={classes.Input} {...props}/>
    )
  }

export default Input