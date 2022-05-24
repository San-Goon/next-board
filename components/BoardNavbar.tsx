import {NextPage} from "next";
import {FunctionComponent, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const NavItem:FunctionComponent<{activeItem: string, setActiveItem:Function, name:string, route:string}> = ({activeItem, setActiveItem, name, route}) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span onClick={() => {setActiveItem(name)}}>{name}</span>
                </a>
            </Link>
        ) :
            <span>{name}</span>
    )
}

const BoardNavbar: NextPage = () => {
    const [activeItem, setActiveItem] = useState<string>("free");
    const {pathname} = useRouter();

    useEffect(()=>{
        if(pathname === "/free") {
            setActiveItem("free");
        }
        if(pathname === "/class") {
            setActiveItem("class");
        }
    },[])
    return <div>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={"자유게시판"} route={"/board/free"} />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={"직업게시판"} route={"/board/class"} />
    </div>
}

export default BoardNavbar;
