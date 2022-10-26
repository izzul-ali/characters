import { AiOutlineReload } from 'react-icons/ai'

const Loading = () => {
    return (
        <div className="w-fit h-fit mx-auto mt-32 text-center space-y-5">
            <AiOutlineReload className='w-24 h-24 animate-spin' />
            <p className='text-lg'>Loading...</p>
        </div>
    )
}

export default Loading