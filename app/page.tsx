import Image from "next/image";
import Logo from "@/images/i3.jpg"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StoryWriter from "@/components/ui/StoryWriter";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex1 grid grid-cols-1 lg:grid-cols-2">
    <div className="bg-blue-500 flex flex-col space-y-5 justify-center 
    items-center order-1 lg:order-1 pb-10 rounded-lg p-5">
      <div className="mt-10">
      <Image src={Logo} height={250} alt="logo" className="rounded-lg"/>
      </div>
      <Button asChild className="px-20 bg-blue-400 p-10 text-xl rounded-lg">
        <Link href="/stories">Explore Library</Link>
      </Button>
    </div>

    <StoryWriter />
      </section>
    </main>
  );
}
