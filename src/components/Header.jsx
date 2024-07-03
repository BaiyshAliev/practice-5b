import style from "./Header.module.css"
const Header = (props) =>{

    const addHandler = () =>{
        const date = {
            id: Math.random()
        }
        props.add(date)
    }

    return(
        <div className={style.container}>
            <button onClick={addHandler}>ADD</button>
        </div>
    )
}

export default Header