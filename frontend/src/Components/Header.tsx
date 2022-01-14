// import { Button } from "@chakra-ui/react";
// import { Card } from "../StyledComponents/Card";
import { Button } from "@chakra-ui/react";
import { Container } from "../StyledComponents/Container";
import { Nav } from "./Nav";

export default function Header() {
  return (
    <Container>
      <Nav>
        <h1>Calender App</h1>
        <Button colorScheme="var(--chakra-colors-gray-800)">add new +</Button>
      </Nav>
    </Container>
  );
}
