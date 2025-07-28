// import React from "react";

// interface Props {};

const ContactPage = () => {
  return (
    <>
      <div className=" bg-neutral-50  px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold  text-center font-Inter mb-4">Contact Me</h2>
          <p className="textxl font-medium font-Inter text-gray-600 text-center mb-8">Want to get in touch? Use this form to send me an email, and I'll respond as soon as I can!</p>
          <form className="space-y-6" action="https://formspree.io/f/xzzrwnyo" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blurple focus:border-blurple"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blurple focus:border-blurple"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blurple focus:border-blurple"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blurple hover:bg-peenk  text-offwhite font-semibold py-2 px-4 rounded-md transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default ContactPage