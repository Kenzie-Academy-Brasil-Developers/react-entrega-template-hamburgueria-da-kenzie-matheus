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

  const getProducts = async () => {
    try {
      const response = await api.get("products");
      setproductsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  function searchbtn() {
    const filterresult = productslist.filter((product) => {
      if (product.name === search) {
        return product;
      } else if (product.category === search) {
        return product;
      }
    });
    setproductsList(filterresult);
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
              />
              <button onClick={searchbtn}>Pesquisar</button>
            </Searchbar>
          </Div>
        </HeaderNav>
      </DivHeaderContainer>

      <Slyleddiv>
        <Products
          productslist={productslist}
          currentSale={currentSale}
          setcurrentSale={setcurrentSale}
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
