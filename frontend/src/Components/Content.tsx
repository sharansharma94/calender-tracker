import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Card } from "../StyledComponents/Card";
import { Container } from "../StyledComponents/Container";

interface Forms {
  forms: string[];
}

export default function Content({ forms }: Forms) {
  return (
    <>
      <Container>
        {forms.map((form: string) => {
          return (
            <Card>
              {form}
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
          );
        })}
      </Container>
    </>
  );
}
