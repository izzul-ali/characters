import { Character } from "../types/character"

type Props = {
    characters: Array<Character>
}

const Card = ({ characters }: Props) => {
    return (
        <div className="mt-10 min-h-screen space-y-10 grid grid-cols-1 sm:grid-cols-2 items-center sm:gap-5">
            {
                characters.map((v, i) => {
                    return (
                        <div key={v.id} className={`${i % 2 !== 0 ? 'text-right' : ''} flex gap-2 sm:gap-5 w-full h-40 justify-around bg-black/20 py-4 px-4 rounded shadow-lg`}>
                            <img className={`w-28 lg:w-56 h-full rounded ${i % 2 !== 0 ? 'order-1 sm:order-none' : ''}`} src={v.image} alt={v.name} />
                            <div className="flex flex-col justify-between w-1/2">
                                <div className="space-y-1">
                                    <p className="text-lg font-bold">{v.name}</p>
                                    <div className={`flex gap-2 ${i % 2 !== 0 ? 'justify-end' : ''}`}>
                                        <p className={`text-gray-200 ${i % 2 === 0 ? 'order-2' : ''}`}>{v.status}</p>
                                        <p className={`w-[7px] h-[7px] my-auto rounded-full ${v.status === "Alive" ? 'bg-green-500' : `${v.status === "Dead" ? 'bg-red-700' : 'bg-gray-400'}`
                                            }`}></p>
                                    </div>
                                    <p className="text-gray-400">{v.gender}</p>
                                </div>
                                <p className="text-sm text-gray-400">species: {v.species}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card