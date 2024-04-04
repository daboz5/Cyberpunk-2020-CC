import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
import './App.css'

export default function App() {

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Outlet />
    </>
  )
}