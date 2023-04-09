import SearchPhotos from "./searchPhotos"

function App() {

  return (
    <div className="bg-stone-100 drop-shadow-2xl container mx-auto pb-5 pt-2 pl-5 pr-5">
      <div>
        <h1 className="text-3xl font-bold text-center mt-10">Moteur de recherche avec React & Tailwind</h1>      
        <SearchPhotos />
      </div>
    </div>
  )
}

export default App
