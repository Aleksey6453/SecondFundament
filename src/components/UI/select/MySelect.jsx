import React from 'react'
import styles from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
  console.log(value)
  return (
    <div className={styles.select}>
       <select value={value} onChange={e => onChange(e.target.value)}>
          <option disabled value=''> {defaultValue} </option>
          {
            options.map(option =>
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            )
          }
       </select>
    </div>
  )
}

export {MySelect}
