import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header"
import Loading from "./components/icons/Loading";
import { CharacterResult } from "./types/character";

const App = () => {
  // first using react query in page
  const [page, setPage] = useState<number>(0)

  // fetch data from api
  // if using useEffect hooks, this characters will fetch twice to api
  const characters = async (n: number) => {
    console.log(n);

    const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${n + 1}`)
    return resp.json() as unknown as CharacterResult
  }

  const { data, isFetching } = useQuery(['character', page], () => characters(page), {
    keepPreviousData: true // this config mean keep chacing previous paginate data
  })

  console.log(data?.results);

  if (isFetching) {
    return (
      <div className="h-80">
        <Header />

        <div className="h-full w-full flex items-center justify-center">
          <Loading className="animate-spin" />
        </div>

      </div>
    )
  }

  return (
    <div className="h-full">
      <Header />
      {
        data ? <Card characters={data?.results} /> : null
      }
      <div className="my-5 space-x-3">
        <button type="button" disabled={page === 1} onClick={() => setPage((p => p - 1))} className="bg-gray-200 disabled:bg-gray-500 text-gray-900 px-3 py-1 rounded text-sm">Previous</button>
        <button type="button" disabled={page === 42} onClick={() => setPage((p) => p + 1)} className="bg-gray-200 disabled:bg-gray-500 text-gray-900 px-3 py-1 rounded text-sm">Next</button>
      </div>
    </div>
  )
}

export default App