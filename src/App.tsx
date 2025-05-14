import { Routes, Route, Link } from "react-router-dom"

import { NotificationProvider } from "./contexts/NotificationContext"
import NotificationButton from "./components/NotificationButton"
import Notification from "./components/Notification"

export const NotificationApp: React.FC = () => {
  return (
    <NotificationProvider>
      <h1>💸 Transaction almost ready 💸</h1>
      <p>Are you sure you want to complete this transaction?</p>
      <NotificationButton />
      <Notification />
    </NotificationProvider>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Notification with Context</Link>
        </ul>
        <ul>
          <Link to="/reducer">useReducer</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<NotificationApp />} ></Route>
      </Routes>
    </div>
  )
}

export default App
