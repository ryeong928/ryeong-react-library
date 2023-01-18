import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import InputForm1 from './pages/frame/InputForm1'
import InputForm2 from './pages/frame/InputForm2'

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frame/input-form/1" element={<InputForm1 />} />
      <Route path="/frame/input-form/2" element={<InputForm2 />} />
    </Routes>)
}