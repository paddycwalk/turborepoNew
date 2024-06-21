import "../../styles/main.scss";
import type { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/molecules/Feature/Feature";
import Grid from "../components/molecules/Grid/Grid";
import Page from "../components/molecules/Page/Page";
import Teaser from "../components/molecules/Teaser/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  // cmsheadline: CmsHeadline,
};

storyblokInit({
  accessToken: "R5gC3H07sML4yvIKz256Ggtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
