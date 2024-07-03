import style from "./Main.module.css"
const Main = (props) =>{
    
    return(
        <div>
            {props.data.map((el) =>{
                return(
                    <main>
                        <li>
                            <ul></ul>
                        </li>
                        <h1>{el.id}</h1>
                    </main>
                )
            })}

        </div>
    )
}

export default Main