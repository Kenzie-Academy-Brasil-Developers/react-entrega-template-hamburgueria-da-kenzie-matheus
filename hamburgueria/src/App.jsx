import { useState, useEffect } from "react";
import { api } from "./Services/api";
import { HeaderNav } from ".//Components/Header/Index";
import { Searchbar, Div } from "./Components/Header/Style";
import { Products } from "./Components/listProduts";
import { CarrinoDeCompras } from "./Components/Carrinho";
import MaskGroup from "./Img/MaskGroup.png";
import "./Reset.css";
import { DivHeaderContainer, Slyleddiv } from "./Style";

function App() {
  const [productslist, setproductsList] = useState([]);
  const [currentSale, setcurrentSale] = useState([]);
  const [search, setsearch] = useState("");
  const [filterProducts , setfilterProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await api.get("products");
      setproductsList(response.data);
      setfilterProducts(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);


  function searchbtn(value = false) {
    console.log(value)
   if(!value){
    setfilterProducts(productslist)
    return
   }
    if(search !== ""){
      const filterresult = productslist.filter((product) => {
        if (product.name === search) {
          return product;
          
        } else if (product.category === search) {
          return product;
        }
        
      });
      setfilterProducts(filterresult)
    }else{
      setfilterProducts(productslist)
    }
  }


  return (
    <div className="App">
      <DivHeaderContainer>
        <HeaderNav>
          <Div>
            <img src={MaskGroup} alt="" />
            <Searchbar>
              <input
                type="text"
                placeholder="Digitar Pesquisa"
                onChange={(event) => {
                  setsearch(event.target.value);
                }}
                value = { search }
              />
              <button onClick={searchbtn}>Pesquisar</button>
            </Searchbar>
          </Div>
        </HeaderNav>
      </DivHeaderContainer>

      <Slyleddiv>
        <Products
          productslist={filterProducts}
          currentSale={currentSale}
          setcurrentSale={setcurrentSale}
          setsearch={setsearch}
          searchbtn={searchbtn}
        />
        <CarrinoDeCompras
          productslist={productslist}
          setcurrentSale={setcurrentSale}
          currentSale={currentSale}
        />
      </Slyleddiv>
    </div>
  );
}

export default App;
