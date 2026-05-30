import styles from "./Bye.module.css";


function Bye() {
 const headingStyle={
        color : "white",
        backgroundColor:"black",
        fontSize:50,
        textAlign:"center"
 };
 
    return(   
     <> 
    <h1 style={headingStyle}>BYE - BYE </h1> 
    <h1 className={styles.test}>BYE - BYE </h1> 
    <h3 style={{ color : "white", backgroundColor:"black", textAlign:"center"}}>SAYONARA</h3>
    </>
    )
}
//we learnt 2 diff ways to use inline css in jsx

export default Bye