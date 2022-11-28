import UserDashData from "../components/UserDashData"
import { useRouter } from "next/router"
import { useMMContext } from "../context/MMProvider"
import PageLayout from "../components/layouts/PageLayout";

export default function Home() {
  const router = useRouter();
  const mm = useMMContext().mmContext

  return (
    <>
      <PageLayout>
        <div className="w-full min-h-screen bg-cover">
          <div className="text-center mt-20">

            {mm == undefined || mm.status != "connected" ? (
              <h1 className="font-bold text-3xl leading-tight">
                Please Sign In To View Dashboard
              </h1>

            ) : (
              <>
                <h1 className="font-bold text-6xl leading-tight">
                  Dashboard
                </h1>
                <button
                  className="block mx-auto text-bold text-xl rounded-xl mt-5 px-16 py-2"
                  onClick={() => router.push("/join")}
                >
                  Mint
                </button>
                <div className="text-center mt-20">
                  <UserDashData />
                </div>
              </>
            )}
          </div>
        </div>
      </PageLayout>


    </>
  )
}
