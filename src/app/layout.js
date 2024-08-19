//import { Inter } from "next/font/google";
import "./globals.css";


//const inter = Inter({ subsets: ["latin"] });

import Cabecalho from "@/componentes/cabecalho";
import Rodape from "@/componentes/rodape";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* <body className={inter.className}>{children}</body> */}
      <body suppressHydrationWarning={true}>
        {/* <div className="layout"> */}
          <Cabecalho/>
          {children}
          <Rodape />
        {/* </div> */}
      </body>
    </html>
  );
}
