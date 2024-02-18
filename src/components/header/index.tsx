import Button from "@/components/button";


const Header = () => (
  <header>
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
        <Button primary>Entre em contato</Button>
      </div>
    </div>
    
      
   
  </header>
);

export default Header;
