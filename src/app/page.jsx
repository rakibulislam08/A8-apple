

import Banner from "../components/shared/Banner";
import TopApples from "../components/shared/TopApples";

const getProducts = async () => {
  const res = await fetch('http://localhost:3000/data/products.json');
  const info =await res.json();
  return info;
}

export default async function Home() {
  const topProducts =await getProducts();
    console.log(topProducts);
  
  
  return (
    <div>
      <Banner />
      <TopApples />

    </div>
  );
}
