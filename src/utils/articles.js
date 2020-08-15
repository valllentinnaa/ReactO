const getArticles = async (length) => {
  const promise = await fetch(`http://localhost:9999/api/articles?length=${length}`)
  return await promise.json()
};

export default getArticles