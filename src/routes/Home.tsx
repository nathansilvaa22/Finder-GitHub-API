import { useState } from "react"
import Search from "../components/Search"
import {UserProps} from "../typer/user"
import User from "../components/User"
import Error from "../components/Erro"




const Home = ()=>{

  const [user,setUser] = useState<UserProps | null>(null)
  const [err, setErr] = useState(false)

  const loadUser = async(userName: string) => {

    setErr(false)
    setUser(null)

    const res= await fetch(`https://api.github.com/users/${userName}`)

    const data = await  res.json()

    if(res.status === 404){

      setErr(true)
      return

    }

    const {avatar_url,login,location,followers,following} = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setUser(userData)

  }

  return <div> 

          <Search loadUser={loadUser}/>
          {user && <User {...user}/>}
          {err && <Error/>}

     </div>
}

export default Home

