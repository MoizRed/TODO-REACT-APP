type props ={
    donecount :  string | number , 
    todos : {name : string , done : boolean}[]
}

const styles = { position: "fixed", bottom: 0, width: "100%", textAlign: "center", backgroundColor: "#ddd", padding: "10px"}

export default function Footer({donecount , todos}: props) {
  return (
    <div style={styles}>
    <div >
        Completed Tasks : {donecount}
    </div>
    <div>
        Total tasks : {todos.length}

    </div>
    </div>

  )
}
