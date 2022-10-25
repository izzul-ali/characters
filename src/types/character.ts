export interface Character {
    created: string,
    episode: Array<string>,
    gender: string,
    id: number,
    image: string,
    location: {
        name: string,
        url: string
    },
    name: string,
    origin: {
        name: string
        url: string
    },
    species: string,
    status: string,
    url: string
}

export interface CharacterResult {
    info: {
        count: number,
        next: string | null,
        pages: number,
        prev: string | null
    },
    results: Array<Character>
}