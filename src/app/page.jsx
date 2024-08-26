'use client';
import { Container, Heading, Table, Th, Thead, Tbody, Tr, Td, Spinner, FormControl, FormLabel } from "@chakra-ui/react";
import { useProducts } from "./features/useProducts";

export default function Home() {
  const {data,isLoading} = useProducts();


  const renderProducts = () => {
    return data?.data.map((product) => (
      <Tr key={product.id} >
        <Td>{product.id}</Td>
        <Td>{product.name}</Td>
        <Td>{product.price}</Td>
        <Td>{product.description}</Td>
        <Td>{product.image}</Td>
      </Tr>
    ));
  };
  
  
  return (
    
    <main>
      <Container maxW="container.xl" p={6} >
        <Heading>Todo list</Heading>
        
        <Table size="lg"> 
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
            {isLoading ? <Spinner/> : null}
          </Tbody>
        </Table>
        <form action="">
          <FormControl>
            <FormLabel>Product Label</FormLabel>
            <input/>
          </FormControl>
        </form>
      </Container>
    
    </main>
  );
}
