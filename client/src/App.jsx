import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import CreateNotes from "./pages/CreateNotes"
import UpdateNotes from "./pages/UpdateNotes"

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit/:id" element={<UpdateNotes />} />
        <Route path="/create" element={<CreateNotes />} />
      </Routes>
    </div>
  )
}

export default App