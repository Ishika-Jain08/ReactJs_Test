import logo from "../assets/logoPick.jpeg"

const Navbar = () => {
  return (
 <>
    <nav className=" bg-zinc-900" >
        <ul className=" p-5 flex justify-between text-center mr-44 ml-24">
            <img className=" w-10" src={logo} alt="logo"/>
            <li>Home</li>
            <li>LeaderBoard</li>
            <li>Top Story</li>
            <button>SignUp</button>
        </ul>
    </nav>

 </>
  )
}

export default Navbar