import Image from "next/image";
import styles from "./page.module.css";
import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood } from 'react-icons/md';
import Slider from "@/componentes/slider";
import ProdutosHome from "@/componentes/produtos/produtosHome";

export default function Home() {

  <div className="containerGlobal">
      <Slider/>
      <div className={styles.tipos}>
        <MdLunchDining className={styles.tpicon} />
        <MdLocalBar className={styles.tpicon} />
        <MdDining className={styles.tpicon} />
        <MdIcecream className={styles.tpicon} />
        <MdFastfood className={styles.tpicon} />
      </div>

      <ProdutosHome />
      </div>
    
  return (
    <div className="containerGlobal">
        <div className={styles.containerTitulo}>
          <h1 className={styles.txtTitulo}>𝔸𝕦𝕝𝕒 ℕ𝕖𝕩𝕥🌸</h1>
          <h2>Exemplo h2</h2>
          <h3>Exemplo h3</h3>
          <p>Exemplo Parágrafo</p> 

          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
            
          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
            <Image
              src="/time.png"
              width={1000}
              height={1000}
              alt="The Bests"
              className={styles.imageHome}
          />

          </div>
          <Image
            src="/time.png"
            width={1000}
            height={1000}
            alt="Os Melhores"
            className={styles.imageHome}
          />
        </div>
        </div>
      </div>
    );
    
  }
