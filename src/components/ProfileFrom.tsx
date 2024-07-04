
const ProfileForm = () => {
    return (
      <div className="w-screen border-[1px] m-6 pt-10 bg-white rounded-lg pl-16">
        <h2 className="text-2xl font-semibold mb-6">Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Picture</label>
            <div className="flex items-center mt-2">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-700">
                <img src="/path/to/avatar.jpg" alt="Avatar" className="rounded-full" />
              </div>
              <button className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Upload</button>
              <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Remove</button>
            </div>
            <p className="mt-2 text-gray-500">We support your best PNGs, JPEGs and GIFs portraits under 10MB</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="mt-2 p-2 border border-gray-300 rounded-md w-full" placeholder="Noah" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="mt-2 p-2 border border-gray-300 rounded-md w-full" placeholder="A" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-2 p-2 border border-gray-300 rounded-md w-full" placeholder="noah@demo.dev" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Change Password</label>
            <button className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Change Password</button>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Danger zone</label>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md">Delete account</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ProfileForm;
  