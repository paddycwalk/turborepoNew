import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoryData,
  ISbStoriesParams,
} from "@storyblok/react";
import Layout from "../components/layout";

interface PageProps {
  story: ISbStoryData<any> | null;
}

export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={story ? story.name : "Lorem"} />
      </Head>
      <Layout>
        <StoryblokComponent blok={story?.content} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
