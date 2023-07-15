export const ContactForm = ({ url }) => {
  return (
    <section>
      <div class="py-8 lg:py-16 pl-10 max-w-screen-md">
        <p class="mb-8 lg:mb-16 font-light text-gray-500 sm:text-xl">
          Contact me and I will reach back as soon as I can!
        </p>
        <form action={url} class="space-y-8">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="entry.1514930109"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Name..."
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="entry.696396198"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="email@example.com"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
              Message
            </label>
            <input
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Message"
              name="entry.838807073"
            ></input>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm bg-blue-500 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
