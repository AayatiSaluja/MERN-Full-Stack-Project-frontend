
import  {useState} from "react" ;
function StudentForm (props)
{
    const [name, setName] = useState("props.nameValue");
    const [email,setEmail] = useState("props.emailValue");
    const [rollNo,setRollNo] = useState("props.rollNoValue");

    const arr = [name, email, rollNo]; // [Raj, raj@gmail.com, 3]

    //Data available in the child component needs to be transferred to parent component
    //Callback function
    
    const handleClick = () => {
        props.getState(arr);
    }

    return (
        <div style={{maxWidth: "40%", margin:"0px auto"}}>
            <br/>
            <input defaultValue = {props.nameValue} onChange={(event) => setName (event.target.value)} class="form-control" placeholder="Enter your name" /><br/>
            <input defaultValue = {props.emailValue} onChange={(event) => setEmail (event.target.value)} class="form-control" placeholder="Enter your email" /> <br/>
            <input defaultValue = {props.rollNoValue} onChange={(event) => setRollNo (event.target.value)} class="form-control" placeholder="Enter your roll number" /> <br/> 
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">Submit</button>
        </div>
    )
}

//
//K -> setName("K") -> name="K"
//Ka -> setName("Ka") -> name="Ka"

export default StudentForm