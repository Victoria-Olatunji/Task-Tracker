import Button from "./Button"

const Header = ({title, onAdd, showAdd }) => {
    // const onClick=() => {
    //     console.log("click")
    // }
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd} />
        {/* <Button color="blue" text="Hello 1"/>
        <Button color="red" text="Hello 3"/> */}
    </header>
  )
}

Header.defaultProps= {
    title: "Task Tracker",
}

// const headingStyle={
//     color:"red", 
//     backgroundColor: "black",
// }
export default Header