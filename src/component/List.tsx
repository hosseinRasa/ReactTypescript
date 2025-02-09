import { ReactNode } from "react"

type ListProps<T> = {
    items: T[],
   //render(item: T[]): ReactNode;
}
export const List = <T,>({items}: ListProps<T>) => {
  return (
    <ul>
   { items.map((item, index) => <li key={index}>{item as ReactNode}</li>)}
    </ul>
  )
}
