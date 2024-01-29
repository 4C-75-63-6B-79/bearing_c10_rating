export default async function calculateC10Rating({ request }) {
  console.log(request);

  const data = await request.formData();

  const designLoad = Number(data.get("designLoad"));
  const designLife = Number(data.get("designLife"));
  const valueOfA = Number(data.get("typeOfBearing"));

  if (isNaN(designLoad) || isNaN(designLife) || isNaN(valueOfA)) {
    return { errorMessage: "Please enter only numbers" };
  }

  const c10Rating =
    designLoad * Math.pow(designLife / Math.pow(10, 6), 1 / valueOfA);
  return {
    c10Rating: c10Rating,
  };
}
