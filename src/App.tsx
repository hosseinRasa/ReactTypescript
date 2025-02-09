import {  useState } from "react"
import { Counter } from "./components/Counter"
import { Header } from "./components/Header"
import { Section } from "./components/Section"
import { Operation } from "./Enums"
import { List } from "./components/List"

function App() {
  // const renderIt = <T,>(items: T[],): ReactNode => {
  //   return items.map(
  //     (item, index) => <li key={index}><> {item}</></li>
  //   )
  // }
  const[count, setCount] = useState<number>(1)
  const calcCount = (count: number, opType: Operation): void  => {
    if((opType === Operation.minus &&--count < 1) || (opType === Operation.add &&++count > 10) ) {alert('Limit');
      setCount(opType === Operation.add ? 10 : 1)
      return;
    }
    switch(opType){
      case Operation.add: setCount(c => ++c);
      break;
      case Operation.minus: setCount(c => --c);
      break;
      default:
        break
    }
     

  }
  return (
    <>
    <Header title="Hello World!"/>
    <Section>
      <ol   type="A" reversed>
        <li>1</li>
        <li>2</li>
      </ol>
    </Section>
    <Counter count={count} setCount={(value: number, optype: Operation) => calcCount(value, optype)}>
      <p>count is {count}</p>
      </Counter>

      <List items={[<a href="https://www.google.com" target="_blank">google</a>, <a href="https://www.tabnak.ir" target="_blank">shanabattery</a>, ]} />
    </>
  )
}

export default App
