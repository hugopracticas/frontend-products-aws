import { useEffect, useState } from "react";
import { getProducts } from "../../api/products-api";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const listProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await getProducts();
      if (!data) {
        throw new Error("Error en la respuesta del server");
      }
      setProducts(data);
    } catch (error) {
      setError("Error al obtener productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <div>Lista de productos test</div>

      {loading ? (
        <div>
          <h1>Cargando los Gifs..</h1>
        </div>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
