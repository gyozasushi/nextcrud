'use client';
import { Container, Heading, Table, Th, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/lib/axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const productsResponse = await axiosInstance.get("/products");
      setProducts(productsResponse.data);
      console.log(productsResponse.data); // Pastikan data yang diterima dari API
    } catch (error) {
      console.log(error);
    }
  };

  const renderProducts = () => {
    return products.map((product) => (
      <Tr key={product.id}>
        <Td>{product.id}</Td>
        <Td>{product.name}</Td>
        <Td>{product.price}</Td>
        <Td>{product.description}</Td>
        <Td>{product.image}</Td>
      </Tr>
    ));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <Container>
        <Heading>Hello World</Heading>
        
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Description</Th>
              <Th>Images</Th>
            </Tr>
          </Thead>
          <Tbody>
            {renderProducts()}
          </Tbody>
        </Table>
      </Container>
    </main>
  );
}
