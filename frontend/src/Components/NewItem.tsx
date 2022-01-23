import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Card } from "../StyledComponents/Card";
import {
  Description,
  ItemFooter,
  ItemWrapper,
  SubTitle,
  Title,
} from "../StyledComponents/Item";
import { Nav } from "./Nav";

import styled from "styled-components";
import {
  Container,
  ContainerColum,
  SpaceBetweenItem,
} from "../StyledComponents/Container";

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
        <Description>
          <Textarea
            // value={value}
            // onChange={handleInputChange}
            placeholder="Add Description of the task"
            size="sm"
          />
        </Description>

        <ItemFooter>
          <ContainerColum>
            <SubTitle>Duration</SubTitle>
            <SpaceBetweenItem>
              <div>
                <p>Estimated : </p>
              </div>
              <div>
                <p>Actual : </p>
              </div>
            </SpaceBetweenItem>
            <SpaceBetweenItem></SpaceBetweenItem>
          </ContainerColum>
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
