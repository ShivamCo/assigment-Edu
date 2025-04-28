import { useEffect, useState } from "react";

const AccountDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userDetails");
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  if (!userDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-100  h-[90vh] rounded-md shadow-sm w-[360px]">
        
        <div className="border-b bg-gray-50 p-4">
          <h2 className="text-m  font-rubik  text-gray-900">
            Account Settings
          </h2>
        </div>

        
        <div className="p-4">
          <div className="flex gap-4 items-start">
          
            <div className="relative w-16 h-16">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="rounded-full w-16 h-16 object-cover"
              />
              
              <div className="absolute bottom-0 right-0 bg-violet-600 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-white"
                >
                  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                  <path
                    fillRule="evenodd"
                    d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

           
            <div>
              <h3 className="text-[14px] font-semibold text-gray-900">
                {userDetails.fullName}
              </h3>
              <p className="text-[13px] text-gray-600">{userDetails.email}</p>
            </div>
          </div>

        
          <p className="mt-4 text-[13px] text-gray-700 leading-5">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        
        <div className="border-t border-dashed"></div>
      </div>
    </div>
  );
};

export default AccountDetails;
