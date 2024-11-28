import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import image from "../assets/images/logo.jpg"
import { FaSquareXTwitter } from "react-icons/fa6"
function Navbar() {
  return (
    <div className=" flex justify-between items-center ">
        <div className="mt-4">
            <img src={image} alt="My Logo" className="w-[40px] h-[50px] bg-black rounded-3xl"/>
        </div>
        <div className="flex items-center gap-4 text-white text-3xl  mt-2">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaSquareXTwitter />
        </div>
    </div>
  )
}

export default Navbar