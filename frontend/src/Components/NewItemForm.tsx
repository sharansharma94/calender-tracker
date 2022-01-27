import { Item } from "../shared/types";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  Description,
  ItemFooter,
  ItemWrapper,
  Title,
} from "../StyledComponents/Item";
import { ContainerColum } from "../StyledComponents/Container";
import { Nav } from "./Nav";

export default function NewItemForm() {
  const { register, handleSubmit } = useForm<Item>();

  const onSubmit: SubmitHandler<Item> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ItemWrapper>
        <Nav>
          <Title>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input id="title" type="text" {...register("title")} />
            </FormControl>
          </Title>
          <Button colorScheme="var(--chakra-colors-gray-800)">Save</Button>
        </Nav>
        <Description>
          <Textarea
            placeholder="Add Description of the task"
            size="sm"
            {...register("description")}
          />
        </Description>

        <ItemFooter>
          <ContainerColum>
            <FormLabel>Duration</FormLabel>
            <HStack>
              <FormControl>
                <FormLabel htmlFor="estimated">Estimated </FormLabel>
                <Input
                  id="estimated"
                  type="estimated"
                  {...register("estimatedDuration")}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="actual">Actual</FormLabel>
                <Input
                  id="actual"
                  type="actual"
                  {...register("actualDuration")}
                />
              </FormControl>
            </HStack>
          </ContainerColum>
        </ItemFooter>
      </ItemWrapper>
    </form>
  );
}
