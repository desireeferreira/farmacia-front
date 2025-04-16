import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='w-full bg-purple-500 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <Link to='/home' className="text-2xl font-bold">FarmaGen</Link>
        <div className='flex gap-4'>
          <Link to='/listacategoria' className='hover:underline'>Listar categorias</Link>
          <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
