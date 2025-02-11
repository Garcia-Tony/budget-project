export function RegistrationForm() {
  return (
    <div className="container">
      <div className="flex flex-wrap mb-1">
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-white-500">Sign Up</h2>
          <label className="mb-1 block">
            <span className="underline">Username</span>
            <input
              required
              name="username"
              placeholder="username"
              type="text"
              className="block border border-gray-600 rounded p-2 h-8 w-full mb-2"
            />
          </label>
          <br />
          <br />
          <label className="mb-1 block">
            Password
            <input
              required
              name="password"
              placeholder="password"
              type="password"
              className="block border border-gray-600 rounded p-2 h-8 w-full mb-2"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
