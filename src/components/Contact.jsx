const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full
    items-center justify-center">
      <div className="flex flex-col items-center justify-center
      gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-700 to-yellow-400
          bg-clip-text text-transparent">
            Get in touch
          </span>
        </h1>

        <p className="text-center text-lg font-semibold text-gray-500">
          Want to chat? Feel free to send me an E-mail through this button.
        </p>

        <a href="mailto:fran14.ich@gmail.com" className="text-nowrap rounded-lg border border-[#9cae02]
        bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-[#9cae02]
        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
        hover:shadow-[#9cae02]">Contact Me</a>
      </div>
    </div>
  )
}

export default Contact;