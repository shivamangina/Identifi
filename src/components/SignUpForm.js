import React from "react";
export default function SignUpForm() {
  // get form data in react hooks
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    gender: "",
    typeOfUser: "",
    location: ""
  });

  // create a form in react hooks
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // create a form in react hooks
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {[
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "gender", label: "Gender" },
        { name: "typeOfUser", label: "Type Of User" },
        { name: "location", label: "Location" }
      ].map((item, index) => (
        <div key={index}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {item.label}
          </label>
          <div className="mt-1">
            <input
              id={item.name}
              name={item.name}
              onChange={handleChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      ))}

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign in
        </button>
      </div>
    </form>
  );
}
