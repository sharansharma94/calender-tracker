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
          return <Card>{form}</Card>;
        })}
      </Container>
    </>
  );
}
