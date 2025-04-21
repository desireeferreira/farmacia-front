function Home() {
    return (
        <>
            <div className="bg-orange-500 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col  items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">
                            FarmaBem!
                        </h2>
                        <p className="text-xl">
                            Se até seu deploy precisa de saúde, imagina você.
                        </p>
                        <img src="/assets/acne.png" alt="Imagem acne" className="" />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
