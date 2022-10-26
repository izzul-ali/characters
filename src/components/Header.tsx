import { BsGithub } from "react-icons/bs";

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-xl italic font-semibold tracking-wider">RickAndMorty</h1>
            <a href="https://github.com/izzul-ali" target={"_blank"}>
                <BsGithub className="w-6 h-6 mr-2" />
            </a>
        </header>
    )
}

export default Header