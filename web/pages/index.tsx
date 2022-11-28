import { useRouter } from "next/router"
import { useState } from "react"
import FireFoot from "../components/footerAnimation"

enum UserChoice {
  EndUser = "endUser",
  DaoAdmin = "daoAdmin",
}

export default function Home() {
  const router = useRouter()

  const [activeChoice, setActiveChoice] = useState(UserChoice.EndUser)

  return (
    
    <div className="flex h-screen">
      <div className="grid grid-flow-row auto-rows-max gap-4 place-content-center m-auto">

        <h1 className="text-center font-bold text-6xl pb-10 text-secondary">Soul DAO</h1>
        <button className="btn btn-primary" onClick={() => router.push("/dashboard")}>User</button>
        <button className="btn btn-secondary" onClick={() => router.push("/admin-dashboard")}>Admin</button>

        <FireFoot />
      </div>
    </div>    

  )
}
