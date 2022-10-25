import { useQuery } from "@tanstack/react-query";
import Card from "./components/Card";
import Header from "./components/Header"
import Loading from "./components/icons/Loading";
import { CharacterResult } from "./types/character";

const App = () => {
  // first using react query in page

  // fetch data from api
  // if using useEffect hooks, this characters will fetch twice to api
  const characters = async () => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
    return resp.json() as unknown as CharacterResult
  }

  const { data, isLoading, status } = useQuery(['character'], characters, {
    keepPreviousData: true
  })

  console.log(data?.results);


  if (isLoading) {
    return (
      <div className="h-80">
        <Header />

        <div className="h-full w-full flex items-center justify-center">
          <Loading className="animate-spin" />
        </div>

      </div>
    )
  }

  // if (status === 'error') {
  //   return (
  //     <div className="h-full">
  //       <Header />

  //       <div className="flex items-center justify-center w-full h-full"></div>
  //       <p className="">Terjadi Kesalah Pada Saat Memanggil Api, Mohon Kembali Beberapa Saat Lagi</p>

  //     </div>
  //   )
  // }

  return (
    <div className="h-full">
      <Header />
      {
        data ? <Card characters={data?.results} /> : null
      }
    </div>
  )
}

export default App