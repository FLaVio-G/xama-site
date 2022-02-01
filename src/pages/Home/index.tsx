import vegamsi64 from '../../assets/vegamsi64.jpg';
import { ProductList  } from './styles';


export function Home() {
  return (
    <ProductList >
      <li>
        <img src={vegamsi64} alt="vegamsi64" />
        <strong>RX vega 64</strong>
        <button
          type="button"
        ></button>


        <div>
          Adicionar ao carrinho
        </div>

        <span> ADICIONAR AO CARRINHO</span>

        <button />
      </li>

      <li>
        <img src={vegamsi64} alt="vegamsi64" />
        <strong>RX vega 64</strong>
        <button
          type="button"
        ></button>


        <div>
          Adicionar ao carrinho
        </div>

        <span> ADICIONAR AO CARRINHO</span>

        <button />
      </li>
      <li>
        <img src={vegamsi64} alt="vegamsi64" />
        <strong>RX vega 64</strong>
        <button
          type="button"
        ></button>


        <div>
          Adicionar ao carrinho
        </div>

        <span> ADICIONAR AO CARRINHO</span>

        <button />
      </li>

      
    </ProductList >

  );
};

export default Home;