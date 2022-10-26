import { Character } from "../types/character"

type Props = {
    characters: Array<Character>
}

// Add link to see detail character

const Card = ({ characters }: Props) => {
    return (
        <div className="mt-10 space-y-10 grid grid-cols-1 sm:grid-cols-2 items-center sm:gap-5">
            {
                characters.map((v, i) => {
                    return (
                        <div key={v.id} className="flex gap-5 w-full justify-evenly bg-black/20 py-5 rounded shadow-lg">
                            <img className={`w-28 lg:w-56 h-fit ${i % 2 !== 0 ? 'order-1 sm:order-none' : ''}`} src={v.image} alt={v.name} />
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <p className="text-lg font-bold">{v.name}</p>
                                    <p className="text-gray-500">{v.status}</p>
                                    <p className="text-gray-500">{v.gender}</p>
                                </div>
                                <p>{v.species}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card