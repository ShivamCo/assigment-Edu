const Login = () => {
  return (
    <div className="flex min-h-screen items-center " >
    <div className="max-w-md mx-auto bg-gray-50 p-8 border border-gray-200 rounded-md h-[90vh] w-100 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-rubik font-medium text-gray-900 mb-2">
          Signin to your
          <br />
          PopX account
        </h2>
        <p className=" font-rubik text-gray-500 mb-8">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <form className="flex flex-col gap-6">
          <div className="relative">
            <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-sm font-medium text-violet-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-sm font-medium text-violet-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </form>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-gray-300 text-white font-semibold py-3 rounded-md cursor-not-allowed"
          disabled
        >
          Login
        </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
