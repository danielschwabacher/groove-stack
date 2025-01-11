import { Button, Container, Text, useMantineColorScheme } from "@mantine/core";

export const MarketingHomePage = () => {
  const { setColorScheme } = useMantineColorScheme();
  return (
    <Container>
      <Text>Welcome to groove. You are not logged in</Text>
      <Button>test</Button>
      <Button
        onClick={() => {
          setColorScheme("light");
          alert("changed colors!!!");
        }}
      >
        change colors!!!
      </Button>
    </Container>
  );
};
