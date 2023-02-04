import React,{useState} from 'react' 
import './login.css'
import Waves from "../../SVG/footerWaves.svg"

const Loginv = () => { 
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput,setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
	return(
  	<div>
	    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className='formi'>
	<div>
        <h3>Login Here</h3>

        <label for="username"></label>
        <input type="text" placeholder="Email or Phone" id="username" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label for="password"></label>
        <input type="password" placeholder="Password" value={passw} id="password"onChange={(e)=>setPassw(e.target.value)}/>

        <button>Log In</button>
        {/* <div class="social">
          <div class="go"><i class="fab fa-google"></i>Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>Facebook</div>
        </div> */}
		</div>
    </form>
	<image style={{position:"absolute",left:"0",bottom:"0"}} src={Waves}/>
	</div>
	
)}
export default Loginv;