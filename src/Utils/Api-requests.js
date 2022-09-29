import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://cavs-be-nc-news.herokuapp.com/api",
});

export const fetchArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return newsApi.get("/articles", { params: { topic: topic } }).then((res) => {
    return res.data;
  });
};

export const fetchArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const fetchComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchVotes = (article_id, votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then((res) => {
      return res.data.article;
    });
};
