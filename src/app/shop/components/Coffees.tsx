import CoffeeCard from "@/components/ui/CoffeeCard"

export default function Coffees() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-stretch justify-center w-full">
      <CoffeeCard 
        id="taster-choice"
        name="Nescafé Taster's Choice Gourmet Roast"
        notas= "afrutadas-durazno"
        roast="TOSTADO MEDIO"
        precio="99"
        bgColor="#A9AE36"
        image="images/product-images/tasters-choice.png"
        characteristic="100% ARÁBICA"
      />
      <CoffeeCard 
        id="jv-sierra-nevada"
        name="Juan Valdez Sierra Nevada"
        notas= "chocolate negro-caramelo-nuez tostada"
        roast="TOSTADO FUERTE"
        precio="279"
        bgColor="#A893DE"
        image="images/product-images/juan-valdez-sierra-nevada.png"
        characteristic="CAFÉ DE ORIGEN"
      />
      <CoffeeCard 
        id="garat"
        name="Café Garat"
        notas= "chocolate-caramelo"
        roast="TOSTADO MEDIO"
        precio="150"
        bgColor="#A1CAF1"
        image="images/product-images/cafe-garat-molido.png"
        characteristic="100% ARÁBICA"
      />
      <CoffeeCard 
        id="garat-avellana"
        name="Café Garat Avellana"
        notas= "avellana"
        roast="TOSTADO MEDIO"
        precio="170"
        bgColor="#D8C3B1"
        image="images/product-images/garat-avellana.png"
        characteristic="SABORES ESPECIALES"
      />
      <CoffeeCard 
        id="sb-espresso-roast"
        name="Starbucks Espresso Roast"
        notas= "caramelo"
        roast="TOSTADO FUERTE"
        precio="280"
        bgColor="#132625"
        image="images/product-images/starbucks-espresso-roast.png"
        characteristic="AROMATICO Y CARAMELIZADO"
      />
      <CoffeeCard 
        id="sb-pike-place"
        name="Starbucks Pike Place"
        notas= "nueces tostadas-cacao"
        roast="TOSTADO MEDIO"
        precio="350"
        bgColor="#C29365"
        image="images/product-images/starbucks-pikeplace.png"
        characteristic="LATINOAMERICANO"
      />
      <CoffeeCard 
        id="sb-blonde-espresso"
        name="Starbucks Blonde Espresso"
        notas= "caramelo-limon-naranja-manzana"
        roast="TOSTADO LIGERO"
        precio="290"
        bgColor="#FAD06F"
        image="images/product-images/starbucks-blonde-espresso.webp"
        characteristic="SUAVE Y ENVOLVENTE"
      />
      <CoffeeCard 
        id="sb-caffe-verona"
        name="Starbucks Caffè Verona"
        notas= "cacao-caramelo"
        roast="TOSTADO FUERTE"
        precio="300"
        bgColor="#4B0118"
        image="images/product-images/starbucks-verona.png"
        characteristic="CACAO INTENSO Y SABOR DULCE CARAMELIZADO"
      />
      <CoffeeCard 
        id="jv-volcan"
        name="Juan Valdez Volcan"
        notas= "caramelo dulce-cacao"
        roast="TOSTADO FUERTE"
        precio="150"
        bgColor="#6B6E7F"
        image="images/product-images/juan-valdez-volcan.png"
        characteristic="CAFÉ DE ORIGEN"
      />
      <CoffeeCard 
        id="jv-colina"
        name="Juan Valdez Colina"
        notas= "durazno-chocolate blanco"
        roast="TOSTADO MEDIO"
        precio="180"
        bgColor="#D17B28"
        image="images/product-images/juan-valdez-colina.png"
        characteristic="CAFÉ DE ORIGEN"
      />
      <CoffeeCard 
        id="jv-cumbre"
        name="Juan Valdez Cumbre"
        notas= "te negro-cacao-especias"
        roast="TOSTADO FUERTE"
        precio="130"
        bgColor="#64AF30"
        image="images/product-images/juan-valdez-cumbre.png"
        characteristic="CAFÉ DE ORIGEN"
      />
      <CoffeeCard 
        id="garat-espresso"
        name="Garat Espresso"
        notas= "cacao-nuez"
        roast="TOSTADO FUERTE"
        precio="120"
        bgColor="#CAC6C7"
        image="images/product-images/garat-espresso.png"
        characteristic="100% ARÁBICA"
      />
    </section>
  )
}

