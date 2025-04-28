import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();


  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "", 
  });

  const getUserDetails = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === "radio" ? value === "true" : value;

    setUserDetails((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
   navigate("/account-details"); 
  };

  

  return (
    <div className="flex min-h-screen items-center">
      <div className="max-w-md mx-auto h-[90vh] bg-gray-50 w-100 p-8 border border-gray-200 rounded-md flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-medium font-rubik text-gray-900 mb-8">
            Create your
            <br />
            PopX account
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-sm font-medium text-violet-600">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                onChange={getUserDetails}
                type="text"
                name="fullName"
                value={userDetails.fullName}
                placeholder="Marry Doe"
                className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-sm font-medium text-violet-600">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                onChange={getUserDetails}
                type="text"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                placeholder="Enter Phone Number"
                className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-sm font-medium text-violet-600">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                onChange={getUserDetails}
                type="email"
                name="email"
                value={userDetails.email}
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-sm font-medium text-violet-600">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                onChange={getUserDetails}
                type="password"
                name="password"
                value={userDetails.password}
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-sm font-medium text-violet-600">
                Company name
              </label>
              <input
                onChange={getUserDetails}
                type="text"
                name="companyName"
                value={userDetails.companyName}
                placeholder="Enter Company Name"
                className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-900">
                Are you an Agency?<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    onChange={getUserDetails}
                    name="isAgency"
                    type="radio"
                    value={true}
                    checked={userDetails.isAgency === true}
                    className="accent-violet-600 w-4 h-4"
                  />
                  <span className="text-gray-900">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    onChange={getUserDetails}
                    name="isAgency"
                    type="radio"
                    value={false}
                    checked={userDetails.isAgency === false}
                    className="accent-violet-600 w-4 h-4"
                  />
                  <span className="text-gray-900">No</span>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 hover:cursor-pointer rounded-md font-medium"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
