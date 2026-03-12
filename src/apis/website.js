import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Services
export const getServices = () => axios.get(`${API_BASE}/services`);

// Projects/Work
export const getProjects = () => axios.get(`${API_BASE}/projects`);

// Testimonials/Clients
export const getTestimonials = () => axios.get(`${API_BASE}/testimonials`);

// Jobs/Career
export const getJobs = () => axios.get(`${API_BASE}/jobs`);

// Contact Info
export const getContactInfo = () => axios.get(`${API_BASE}/contact-info`);

// Enquiries
export const createEnquiry = (data) => axios.post(`${API_BASE}/enquiries`, data);

// User Contact
export const createUserContact = (data) => axios.post(`${API_BASE}/user-contact`, data);

// Change Password (for admin)
export const changePassword = (oldPassword, newPassword, confirmPassword, token) => 
  axios.post(`${API_BASE}/auth/change-password`, 
    { oldPassword, newPassword, confirmPassword },
    { headers: { Authorization: `Bearer ${token}` } }
  );
