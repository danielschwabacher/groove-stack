import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Grid,
  ThemeIcon,
  Box,
  Paper,
  rgba,
} from "@mantine/core";
import {
  GitHubLogoIcon,
  RocketIcon,
  LightningBoltIcon,
  StarIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
import classes from "./MarketingHomePage.module.css";
import { useNavigate } from "@remix-run/react";

export const MarketingHomePage = () => {
  const navigate = useNavigate();
  const features = [
    { icon: <LightningBoltIcon />, label: "Mantine" },
    { icon: <StarIcon />, label: "Prisma" },
    { icon: <DashboardIcon />, label: "Vite" },
  ];

  return (
    <Container size="xl" py={300} className={classes.main}>
      <Grid gutter={40} align="center">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="xl">
            <Group gap={"xs"}>
              <ThemeIcon size="lg" radius="md" variant="transparent">
                <RocketIcon
                  style={{ width: 20, height: 20 }}
                  color="var(--mantine-primary-color-filled)"
                />
              </ThemeIcon>
              <Text
                fw={500}
                size="sm"
                style={{ letterSpacing: 1 }}
                tt="uppercase"
              >
                Groove stack{" "}
              </Text>
            </Group>

            <Title className={classes?.title} order={1} size="h1">
              Remix stack for SaaS
            </Title>

            <Text size="xl" c="dimmed" maw={600}>
              Experience the next generation of web development. Build scalable
              applications with modern tools and frameworks.
            </Text>

            <Group mt="xl">
              <Button
                size="lg"
                leftSection={<RocketIcon />}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                size="lg"
                variant="default"
                leftSection={<GitHubLogoIcon />}
                onClick={() => navigate("/join")}
              >
                Signup
              </Button>
            </Group>

            <Group mt={30} gap="xl">
              {features.map((feature, index) => (
                <Group key={index} gap="xs">
                  <ThemeIcon
                    size="md"
                    variant="light"
                    color="blue"
                    style={{
                      background: rgba(
                        "var(--mantine-primary-color-filled)",
                        0.07,
                      ),
                    }}
                  >
                    {feature.icon}
                  </ThemeIcon>
                  <Text size="sm" c="dimmed">
                    {feature.label}
                  </Text>
                </Group>
              ))}
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Paper
            mih={320}
            radius="md"
            p="xl"
            bg={"rgba(255, 255, 255, 0.1)"}
            bd={" 1px solid rgba(255, 255, 255, 0.1) "}
          >
            Start developing with the Groove stack
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
