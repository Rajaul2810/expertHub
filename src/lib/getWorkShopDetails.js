const getWorkshopDetails = async (id) => {
  const response = await fetch(
    `https://dummy-server-five.vercel.app/workshops/${id}`
  );
  return response.json();
};
export default getWorkshopDetails;
