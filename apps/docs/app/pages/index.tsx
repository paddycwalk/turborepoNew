import {
  ISbStoriesParams,
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState,
} from "@storyblok/react";
// import { myFunction } from "global-func";

// myFunction("project1");

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <>
      {/* <NextImage src="/images/lorem.jpg" fill={true} aspectRatio="5-2" objectFit="cover" alt="Lorem" priority />
      <Intro>
        <Headline tag="h1" size="2xl">
          Heizsysteme mit Zukunft? Gibt’s schon. Bei Buderus.
        </Headline>
        <p>
          In Heizsystemen von Buderus ist die Zukunft schon eingebaut. Mit langer Lebensdauer dank höchster Qualität bis
          ins kleinste Bauteil. Mit Zukunfts­sicherheit dank modularem Aufbau und Erweiter­barkeit, z.B. um erneuerbare
          Energien. Und mit Vernetzung dank integ­rierter IP-Schnittstelle.
        </p>
      </Intro> */}
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export async function getStaticProps() {
  let slug = "home";
  let sbParams = {
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
