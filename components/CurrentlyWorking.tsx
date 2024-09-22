function CurrentlyWorking() {
    return (
      <div className="flex flex-col mt-[2rem] w-full">
        <h1 className="font-bold tracking-wide text-xl dark:text-gray-800 text-gray-200">currently cooking 👨‍🍳</h1>
        <div className="h-[1px] mt-2 w-full dark:bg-gray-300 bg-zinc-800" />
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
          <div className="flex flex-col w-full">
            <div className="flex gap-2">
              <a target="_blank" rel="noopener noreferrer" href="https://arcadeapi.vercel.app/">
                <p className="text-lg leading-7 font-medium hover:underline dark:text-gray-800 text-gray-300">arcadeapi (coming soon)</p>
              </a>
            </div>
            <p className="text-base dark:text-gray-700 text-gray-400">integrate games through api.</p>
          </div>
        </div>
      </div>
    )
  }

export default CurrentlyWorking;