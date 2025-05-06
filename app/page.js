import {UserCircle} from 'lucide-react'
export default function Home() {
  return (
    <div className="bg-[#081027] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-row justify-around items-center">
        <h1 className="font-bold text-2xl">trackeep.</h1>
        <div className="bg-[#59595940] flex flex-row px-[30] py-[20] rounded-4xl gap-[51]">
          <p>Home</p>
          <p>About</p>
          <p>Tips for sleep</p>
          <p>Guide</p>
        </div>
        <UserCircle size={48}/>
      </div>

      <main>
        <img src="../../public/image/moon.png" className="w-[383] h-[284]" />
      </main>
    </div>
  );
}
