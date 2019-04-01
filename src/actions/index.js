import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async disptatch => {
  const response = await jsonPlaceholder.get("/post");

  dispatchEvent({ type: "FETCH_POSTS", payload: response });
};
