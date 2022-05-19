import React, {FC} from 'react'
import classes from './TextArea.module.css'

interface ITextArea {
  children?: React.ReactNode
  placeholder?: string
  value?: string
  onChange?: (e: any) => void
}

const TextArea: FC<ITextArea> =
  ({...props}) => {
    return (
      <textarea className={classes.TextArea} {...props}/>
    )
  }

export default TextArea