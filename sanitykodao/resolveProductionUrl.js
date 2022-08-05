// export default function resolveProductionUrl(document) {
//   return `https://blog.kodao.io/post/${document.slug.current}`;
// }

// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = process.env.SANITY_API_TOKEN;

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://blog.kodao.io`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

  return previewUrl.toString();
}
