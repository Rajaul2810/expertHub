const getWorkshops = async () => {
  const response = await fetch(
    "https://dummy-server-five.vercel.app/workshops"
  );
  return response.json();
};

export default getWorkshops;
