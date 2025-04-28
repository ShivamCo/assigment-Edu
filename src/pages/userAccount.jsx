import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    // Body

    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col justify-end w-100 h-[90vh] bg-gray-100 border border-gray-200 p-6">
        <div className="mb-6">
          <h1 className=" text-3xl font-medium font-rubik text-gray-900 mb-2">
            Welcome to PopX
          </h1>
          <span className="text-gray-500 font-normal font-rubik ">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </span>
        </div>
        <div className="w-full  space-y-3">
          <a href="/register" className="flex">
            <button className="w-full bg-indigo-600 text-white py-2 hover:cursor-pointer rounded-md font-medium">
              Create Account
            </button>
          </a>
          <a href="/login" className="flex">
            <button className="w-full bg-violet-300 text-black-900 py-2 hover:cursor-pointer rounded-md font-semibold">
              Already Registered? Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
