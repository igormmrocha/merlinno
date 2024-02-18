import Head from "next/head";
import Navigation from "@/components/navigation";


interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    
    <Head>
      <title>Merlinno - Soluções Digitais</title>
      <link rel="icon" href="/icon.svg" />
    </Head>
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
