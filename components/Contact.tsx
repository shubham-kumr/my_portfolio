function Contact() {
    return (
      <div className="space-y-3 mt-10 text-center">
        <div className="inline-block rounded-full font-medium dark:bg-gray-800 dark:text-white px-3 py-1 text-base bg-gray-100 text-black">
          <a href="mailto:theshubhamkumr@gmail.com">Contact</a>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white dark:text-black">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-[600px] dark:text-gray-500 text-white md:text-xl lg:text-base xl:text-xl">
          Want to chat? Just shoot me a DM
          <a
            className="dark:text-blue-500 hover:underline ml-1 text-blue-600"
            href="https://twitter.com/messages/compose?recipient_id=_whyshubham"
            target="_blank"
            rel="noopener noreferrer"
          >
            with a direct question on Twitter
          </a>
          , and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    );
  }

export default Contact;
  