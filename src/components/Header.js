import { Link, useLocation } from "react-router-dom"
import { StyledHeader } from "../lib/styles"

function Common(){
  const location = useLocation().pathname.split("/")[1]

  return (
    <StyledHeader.Common>
      <h1>{location || "Home"}</h1>
      <Link to='/'><h1>Home</h1></Link>
    </StyledHeader.Common>
  )
}

export default {
  Common
}