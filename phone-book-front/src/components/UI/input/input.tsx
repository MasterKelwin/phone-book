import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import style from './input.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Input {
  placeholder: string
  label?: string
  icon: IconDefinition
  id: string
  type: string
  value: any,
  setValue: any
}

export default function Input({
  placeholder,
  label,
  icon,
  id,
  type,
  value,
  setValue
}: Input) {


  return(
    <div className={label ? style.div : style.noLabelDiv}>
      <label htmlFor={id}>{label}</label>
      <i className={label ? style.svg : style.noLabelSvg}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></i>
      <input 
      type={type} 
      id={id} 
      placeholder={placeholder}
      value={value}
      onChange={event => setValue(event.target.value)}/>
    </div>
  )
}