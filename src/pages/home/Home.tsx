

function Home() {
    return (
        <>
            <div className="bg-purple-500 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        FarmaGen
                        </h2>
                        <p className='text-xl'>
                        Se até seu deploy precisa de saúde, imagina você! </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                            
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="public/Acne treatment-amico 1.png"
                            alt="Imagem Página home "
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default Home