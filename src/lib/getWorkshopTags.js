const getWorkShopTags = async () => {
  const response = await fetch(
    "https://dummy-server-five.vercel.app/workshops/Tags"
  );
  return response.json();
};

export default getWorkShopTags;
