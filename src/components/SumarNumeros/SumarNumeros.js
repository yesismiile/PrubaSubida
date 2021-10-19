import stich from '../../components/assets/imagenes/stich.jpg';
function SumarNumeros(props){
    const{num1,num2}=props;
var estilo ={
    color: "white", backgroundColor: "pink"
};
var estilobuton={
    color:"pink",backgroundColor:"white"
};
const sumarNumeros=(num1,num2)=>{
    var num1 = parseInt(props.num1);
    var num2= parseInt(props.num2);
    var suma=num1 + num2;
    console.log("La suma es " + suma);
}
return(
    <div>
        <h1 style={estilo}>Ejercicio Sumar Numeros</h1>
        <button style={estilobuton} onClick={ () => sumarNumeros(4,6)} >
            Sumar numeros</button>
            <br/>
            <img src={stich} className="App-logo"></img>
    </div>
)
}
export default SumarNumeros;
