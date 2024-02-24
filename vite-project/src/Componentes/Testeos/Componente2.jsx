let Componente2 = ({saludo}) => {

    console.log({saludo})

    /*

    PROPS-
*** se toma la porpiedad en app.jsx y se imprime desdel el componente***

***1-
    let Componente2 = (props) => {
    console.log(props)
    si tenes demasiados props despues y no solo este
    despues tenes que poner porps.saludo, props.bla, etc
    es un quilombo
    se puede hacer asi o desectructurando

***2-
    let Componente2 = ({saludo}) => {
    console.log({saludo})
    pero desesctructurando es mas legible

* tambien se puede pasar la prop desde el h1 por ejemplo
    */

    
    let clickbutton = () => {
        console.log('click')
    }
    
    return (<>
    <div>

    <h1 className="bg-slate-400" >Hola desde mi Componente</h1>
    <h1 className="bg-slate-400" >{saludo}</h1>
    <p className="p-50 bg-slate-50" > Hola</p>
    <button onClick={() => clickbutton()}> Hace click</button>
    </div>
    </>);
}

export default Componente2;



