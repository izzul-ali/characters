import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Header from "./components/Header"
import Loading from "./components/Loading";
import { CharacterResult } from "./types/character";
import Card from "./components/Card";
import BtnScrollTop from "./components/BtnScrollTop";

const App = () => {
  const [page, setPage] = useState<number>(1)

  const characters = async (n: number) => {
    console.log(n);

    const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${n}`)
    return resp.json() as unknown as CharacterResult
  }

  const { data, isLoading } = useQuery(['character', page], () => characters(page), {
    // Set this to true to keep the previous data when fetching based on a new query key. 
    keepPreviousData: true,

    // If set to true, the query will refetch on window focus if the data is stale. If set to false, the query will not refetch on window focus. 
    refetchOnWindowFocus: false
  })

  // console.log(data?.results);

  // if (isPreviousData) {
  //   console.log("---isPreviousData---");
  // }

  // if (isFetched) {
  //   console.log("---isFetched---");
  // }

  if (isLoading) {
    return (
      <div className="h-full">
        <Header />
        <Loading />
      </div>
    )
  }

  return (
    <div className="h-full">
      <Header />

      <div className="mt-20 space-x-3 w-fit mx-auto">
        <button type="button" disabled={page === 1} onClick={() => setPage((p => p - 1))} className="bg-gray-200 disabled:bg-gray-500 text-gray-900 px-3 py-1 rounded text-sm">Previous</button>
        <button type="button" disabled={page === 42} onClick={() => setPage((p) => p + 1)} className="bg-gray-200 disabled:bg-gray-500 text-gray-900 px-3 py-1 rounded text-sm">Next</button>
      </div>

      {
        data ? <Card characters={data.results} /> : null
      }

      <BtnScrollTop />
    </div>
  )
}

export default App