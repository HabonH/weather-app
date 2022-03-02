import React from 'react'

const api = {
  key: "e6028f3402d03c87f8daded950fc66db",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div class="app">
      <main>
      <div className='search-box'>
      <input type='text' className="search-bar" placeholder='Search...'/>


      </div>
      </main>
    </div>
  )
}

export default App