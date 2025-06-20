const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white px-4 h-[100vh] bg-[url(./assets/background.jpg)] bg-cover bg-center">
        <h2 className=" text-2xl md:text-6xl mb-4 font-bold">Welcome to my website.</h2>
        <p className="text-lg md:text-xl mb-4 font-medium">This is Contact Page.</p>
        <button className="text-indigo-600 bg-white px-6 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-200">Purchase product</button>
      </div>
    </>
  )
}

export default Contact
