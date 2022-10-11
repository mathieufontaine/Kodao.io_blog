export function sortPosts(posts) {
  const sortedPosts = posts.sort((p1, p2) => {
    const p1Date = new Date(p1.publishedAt);
    const p2Date = new Date(p2.publishedAt);
    return p2Date.getTime() - p1Date.getTime();
  });
  return sortedPosts;
}

export function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
