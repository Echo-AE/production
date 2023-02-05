import React from 'react'
import classes from './Counter.module.scss'

type Props = {}

export const Counter = (props: Props) => {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button
            onClick={() => setCount(count + 1)}
            className={classes.btn}
        >
            Increment
        </button>
    </div>
  )
}