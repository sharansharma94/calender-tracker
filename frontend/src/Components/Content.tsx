import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Card } from "../StyledComponents/Card";
import { Container } from "../StyledComponents/Container";
import { useItems } from "../hooks/useItem";
import { Item } from "../shared/types";
import {
  Title,
  Description,
  ItemWrapper,
  Date,
  ItemFooter,
} from "../StyledComponents/Item";
import { Nav } from "./Nav";
import { formatDateinLocal } from "../utils/formatter";

interface ContentProps {
  useItemHook?: () => {
    items: Item[];
    isLoading: boolean;
    error: boolean;
  };
  showForm: boolean;
}

export default function Content({
  showForm,
  useItemHook = useItems,
}: ContentProps) {
  const { items, isLoading, error } = useItemHook();

  if (isLoading) {
    return <Card>Loading......</Card>;
  }

  if (error) {
    return <Card>Error...</Card>;
  }

  return (
    <>
      <Container>
        {showForm && (
          <Card>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input id="title" type="title" />
              <FormHelperText>Enter Title for todo </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">description</FormLabel>
              <Input id="description" type="description" />
              <FormHelperText>Enter description for todo </FormHelperText>
            </FormControl>
          </Card>
        )}
        {items.map((item) => {
          return (
            <Card>
              {JSON.stringify(item)}
              <ItemWrapper>
                <Nav>
                  <Title>{item.title}</Title>
                  <Date>{formatDateinLocal(item.time)}</Date>
                </Nav>
                <Description>{item.description}</Description>

                <ItemFooter>
                  <Container>
                    <h3>Duration</h3>
                    <Container>
                      <p>Estimated : </p>
                      {item.estimatedDuration}
                    </Container>
                    <Container>
                      <p>Actual : </p>
                      {item.actualDuration}
                    </Container>
                  </Container>
                </ItemFooter>
              </ItemWrapper>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
