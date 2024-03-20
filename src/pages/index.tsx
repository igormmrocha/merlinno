  import Navigation from "@/components/navigation";
  import Head from "next/head";
  import preview from '../../public/preview.png';

  const handleClick = () => {
    window.location.href = "https://portariasegura.vercel.app";
  };

  export default function Home() {
    return (

      <div className=' min-h-screen bg-white'>
      
      <Head>
        <title>Merlinno - Soluções Digitais</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <div className="flex flex-col">
        <Navigation />
        
      </div>
    

        <div className='bg-white min-h-screen'>
      <div className='max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8'>
        <h1 className='font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800'>
        Potencialize sua produtividade
        </h1>
        <div className='max-w-xl mx-auto'>
          <p className='mt-10 text-gray-500 text-center text-xl lg:text-3xl'>
          Oferecemos a resposta pronta para simplificar seus processos, economizar recursos e acelerar o crescimento do seu negócio
          </p>
        </div>
        <div className='mt-10 flex justify-center items-center w-full mx-auto'>
          <button className= 'bg-mod rounded-md p-2 text-black' onClick={() => window.location.href ='#footer'}>Entre em contato</button>
        </div>
      </div>
      </div>
      <div className='bg-mod flex flex-col items-center pb-20 min-h-96'>
      <div className='text-black font-bold text-3xl mb-4 mt-10' id='solucoes'>
        <h1>Soluções</h1>
      </div>
      <div className="bg-white w-full md:w-1/2 sm:w-full p-5 m-5 flex flex-col rounded-lg" onClick={handleClick} style={{ cursor: 'pointer' }}>
          {/* Image */}
          <div className="overflow-hidden">
            <img src={preview.src} alt="Preview" style={{ width: '100%', height: 'auto' }} />
          </div>
          {/* Text */}
          <div className="overflow-x-auto mt-3 max-w-full" >
            <p className="text-gray-600 whitespace-pre-line">
              Portaria Segura é um avançado sistema de controle de acesso em condomínios, projetado para garantir segurança e praticidade. Ele permite o registro detalhado de entradas, bem como a gestão remota de autorizações por parte dos proprietários de apartamentos. É a solução ideal para condomínios que desejam oferecer um serviço eficiente e seguro, especialmente para aqueles que gerenciam locações de temporada por meio de plataformas.
            </p>
          </div>
        </div>



        
      </div>
      <footer className="bg-white text-black py-8" >
      <div className="container mx-auto flex flex-col items-center" id='footer'>
        {/* Footer content */}
        <div className="text-center mb-4">
          <p className="text-lg font-bold">Desenvolvido por Merlinx</p>
          <p className="text-sm">www.merlinx.com.br</p>
        </div>

        {/* Contact information */}
        <div className="text-center" >
          <p className="text-sm">Entre em contato:</p>
          <p className="text-sm">Email: portariasegura@merlinx.com.br</p>
        </div>
      </div>
    </footer>
    </div>
        

    );
  }


    



