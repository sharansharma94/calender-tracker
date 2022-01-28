import { Card } from "../StyledComponents/Card";
import {
  Container,
  ContainerColum,
  SpaceBetweenItem,
} from "../StyledComponents/Container";
import { useItems } from "../hooks/useItem";
import { Item } from "../shared/types";
import {
  Title,
  Description,
  ItemWrapper,
  Date,
  ItemFooter,
  SubTitle,
} from "../StyledComponents/Item";
import { Nav } from "./Nav";
import { formatDateinLocal } from "../utils/formatter";
import NewItem from "./NewItem";
import { FormLabel, HStack } from "@chakra-ui/react";

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
        {showForm && <NewItem />}
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
                  <ContainerColum>
                    <FormLabel>Duration</FormLabel>
                    <HStack>
                      <div>
                        <p>Estimated</p>
                        {item.estimatedDuration}
                      </div>
                      <div>
                        <p>Actual : </p>
                        {item.actualDuration}
                      </div>
                    </HStack>
                  </ContainerColum>
                </ItemFooter>
              </ItemWrapper>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
