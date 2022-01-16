// import { Button } from "@chakra-ui/react";
// import { Card } from "../StyledComponents/Card";
import { Button } from "@chakra-ui/react";
import { Container } from "../StyledComponents/Container";
import { Nav } from "./Nav";

interface HeaderProps {
  handleButtonClick(test: string): void;
}

export default function Header({ handleButtonClick }: HeaderProps) {
  return (
    <Container>
      <Nav>
        <h1>Calender App</h1>
        <Button
          colorScheme="var(--chakra-colors-gray-800)"
          onClick={() => handleButtonClick("new")}
        >
          Add New +
        </Button>
      </Nav>
    </Container>
  );
}
