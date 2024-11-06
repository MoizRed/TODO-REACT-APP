type props ={
    todos : string[]

}
export default function Todoitem({todos}: props) {
  return (
        <>
    {todos.map((e: any, i: number) => <li key={i}>{i + 1} - {e}</li>)}
        
    </>
    
  )
}
