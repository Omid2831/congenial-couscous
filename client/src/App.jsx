import { Route, Routes } from "react-router"
import Notedetails from "./pages/Notedetails"
import Homepage from "./pages/Homepage"
import CreateNotes from "./pages/CreateNotes"

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/noteDetails" element={<Notedetails />} />
        <Route path="/create" element={<CreateNotes />} />
      </Routes>
    </div>
  )
}

export default App