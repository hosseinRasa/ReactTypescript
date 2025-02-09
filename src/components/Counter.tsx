import { ReactNode } from "react"
import {  Operation } from "../Enums"
type CounterProps = {
    setCount(value: number,  opType: Operation,): void,
    count: number
    children: ReactNode,
   
}

export const Counter = ({setCount, count, children}: CounterProps) => {
    
  return (
   
   <>
        <h1>{count}</h1>
        <button onClick={(): void => setCount(count, Operation.add)}>+</button>
        <button onClick={(): void => setCount(count, Operation.minus)}>-</button>

        {children}
   </>
  )
}
