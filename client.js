import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCDN: process.env.NODE_ENV === "production",
};

// Preview Token
// export const sanityClient = createClient({
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: "2021-08-29",
//   token: process.env.SANITY_PREVIEW,
//   useCDN: process.env.NODE_ENV === "production",
// });

export const sanityClient = createClient(config);
export const urlFor = (source) =>
  createImageUrlBuilder(sanityClient).image(source);
