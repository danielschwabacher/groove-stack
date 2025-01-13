// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import type { MetaFunction } from "@remix-run/node";
import { useOptionalUser } from "~/utils";
import { MarketingHomePage } from "~/pages/MarketingHomePage";

export const meta: MetaFunction = () => [{ title: "Groove Stack" }];

export default function Index() {
  const user = useOptionalUser();
  return user ? <div>logged in!!!</div> : <MarketingHomePage />;
}
