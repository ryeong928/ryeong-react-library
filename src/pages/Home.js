import { Link } from "react-router-dom"
import Header from '../components/Header'

export default () => {
  return (
    <>
      <Header.Common />
      <Link to="/frame/input-form/1">/frame/input-form/1</Link>
      <Link to="/frame/input-form/2">/frame/input-form/2</Link>
    </>  
  )
}