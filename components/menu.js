import Link from "next/link"
import Image from "next/image"
import logo from "../images/logo.png"

export default function Menu() {
    return(
        <>
        <div className="menu__logo">
            <Image 
                src={logo}
                width="48px"
                height="48"
            />
            <div className="logo__text">
                Halloween
            </div>
        </div>
        <div className="menu__list">
            <Link href ='/'>
            <a>Home</a>
            </Link>
            <Link href='/category'>
            <a>Category</a>
            </Link>
            <Link href='/about'>
            <a>About</a>
            </Link>
        </div>
        </>
    )
}