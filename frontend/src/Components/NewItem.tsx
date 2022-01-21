import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Card } from "../StyledComponents/Card";
import {
  Description,
  ItemFooter,
  ItemWrapper,
  Title,
} from "../StyledComponents/Item";
import { Nav } from "./Nav";

import styled from "styled-components";

export default function NewItem() {
  return (
    <Card>
      <ItemWrapper>
        <Nav>
          <Title>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input id="title" type="text" />
            </FormControl>
          </Title>
          <Button colorScheme="var(--chakra-colors-gray-800)">Save</Button>
        </Nav>
        <>
          <Textarea
            // value={value}
            // onChange={handleInputChange}
            placeholder="Add Description of the task"
            size="sm"
          />
        </>

        <ItemFooter>
          <Container>
            <h3>Duration</h3>
            <Container>
              <p>Estimated : </p>
            </Container>
            <Container>
              <p>Actual : </p>
            </Container>
          </Container>
        </ItemFooter>

        {/* <ItemFooter>
          <Container>
            <h3>Duration</h3>
            <Container>
              <FormControl>
                <FormLabel htmlFor="estimated">Estimated </FormLabel>
                <Input id="estimated" type="estimated" />
              </FormControl>
            </Container>
            <Container>
              <FormControl>
                <FormLabel htmlFor="actual">Actual</FormLabel>
                <Input id="actual" type="actual" />
              </FormControl>
            </Container>
          </Container>
        </ItemFooter> */}
      </ItemWrapper>
    </Card>
  );
}

export const DurationContainer = styled.div`
  display: flex;
`;
