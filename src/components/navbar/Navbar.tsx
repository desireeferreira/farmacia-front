// import { Link } from "react-router-dom"

// function Navbar() {
//     return (
//         <>
//             <div className='flex justify-center py-2  bg-orange-500 text-white'>            
//                 <div className="container flex justify-between text-lg">
//                 <Link to='/home' className="text-2xl font-bold">FarmaBem</Link>

//                     <div className='flex gap-4'>
//                     <Link to='/listaprodutos' className='hover:underline'>Listar Categoria</Link>
//                     <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='flex justify-center py-2 bg-green-500 text-white'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">FarmaBem</Link>

                    <div className='flex gap-4'>
                        <Link to='/listaprodutos' className='hover:underline'>Listar Categoria</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
