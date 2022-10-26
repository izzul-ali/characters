import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BtnScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div onClick={scrollToTop} className="w-fit cursor-pointer mx-auto my-5">
            <BsFillArrowUpCircleFill className="w-8 h-8 text-green-500" />
        </div>)
}

export default BtnScrollTop