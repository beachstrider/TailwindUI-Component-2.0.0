/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="email"
          id="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
          aria-describedby="email-description"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        We'll only use this for spam.
      </p>
    </div>
  )
}
