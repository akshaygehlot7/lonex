const BASE_URL = 'https://gauravimages.onrender.com/api';

const handleResponse = async (response) => {
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    data = text;
  }

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};

// Function to insert data
export const insertData = async (title, description, images) => {
  try{
  const response = await fetch(`${BASE_URL}/insertData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, images }),
  });

  return handleResponse(response);
} catch (error) {
  throw new Error(error.message);
}
};

// Function to get data by ID
export const getDataById = async (id) => {
  try{
  const response = await fetch(`${BASE_URL}/getData/${id}`);
  return handleResponse(response);
  } catch (error){
    throw new Error (error.message);
  }
};

// Function to get all data
export const getAllData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getAllData`);
    return handleResponse(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get images by name
export const getImagesByName = async (imageName) => {
  try {
    const response = await fetch(`${BASE_URL}/getImages/${imageName}`);
    return handleResponse(response);
  } catch (error) {
    throw new Error(error.message);
  }
};