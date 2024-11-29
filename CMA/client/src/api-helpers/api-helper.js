

import axios from "axios";

export const sendUserAuthRequest = async (name, email, password) => {
    try {
        const res = await axios.post('/user/signup', { name, email, password });
    
        if (res.status !== 201) {
          console.error('Unexpected response:', res.status, res.data);
          throw new Error('Failed to sign up. Please try again later.');
        }
    
        return res.data; // Return the actual response data
      } catch (err) {
        console.error('Error:', err);
        if (err.response) {
          // Server responded with a status code outside the 2xx range
          const message = err.response?.data?.message || 'An error occurred. Please try again.';
          throw new Error(message);
        } else if (err.request) {
          // Request was made but no response received
          console.error('No response received:', err.request);
          throw new Error('No response from the server. Please check your network connection.');
        } else {
          // Any other error (e.g., misconfiguration)
          console.error('Request setup error:', err.message);
          throw new Error('An error occurred. Please try again later.');
        }
      }
  };

  export const userLogin = async (email,password) => {


    try {
        const res = await axios.post('/user/login', { email, password });
    
        // Handle the successful response (status code 200)
        if (res.status === 200) {
          // Save data to localStorage
          localStorage.setItem("user", res.data.user._id);
          localStorage.setItem("token_id", res.data.token);
          return res.data;  // Return user data and token to the calling function
        } else {
          console.error('Unexpected response status:', res.status);
          return { error: 'Unexpected response status.' };
        }
      } catch (err) {
        // Handle network errors and unexpected issues
        console.error('Error during login request:', err);
        if (err.response) {
          // Handle known API errors based on response status code
          if (err.response.status === 400) {
            return { error: err.response.data.message || 'Invalid email or password.' };
          }
          if (err.response.status === 500) {
            return { error: 'Server error. Please try again later.' };
          }
        } else {
          // Handle network errors like no internet, timeout etc.
          return { error: 'Network error. Please check your connection.' };
        }
      }
  }
  