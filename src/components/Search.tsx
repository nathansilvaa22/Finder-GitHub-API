type SearchProps = {
  loadUser: (userName:string) => Promise<void>
}

import {useState, KeyboardEvent} from "react"

import {BsSearch} from 'react-icons/bs'

import classes from "../components/Search.module.css"

const Search = ({loadUser}: SearchProps)=>{

  //usar o botão enter para retornar o usuario
  const clickEnter = (e:KeyboardEvent)=>{
    if(e.key === "Enter"){
      loadUser(userName)
    }
  }

  const [userName, setUserName] = useState("")

  return (
    <div className={classes.search}> 

    <h2>Busque por um Usuário</h2>
    <p>Conheça seus melhores repositórios</p>
    <div className={classes.search_container}>
        <input type="text"
         placeholder="Digite o nome do usuário"
          onChange={(e)=> setUserName(e.target.value)}
          onKeyDown={clickEnter}/>
        <button onClick={()=>loadUser(userName)}>
          <BsSearch/>
          </button>
    </div>

    </div>
  
  ) 
}

export default Search
