import HeroVN from "../components/HeroVN";
import Quiz from "../components/Quiz";
import Poll from "../components/Poll";

export default function Home(){
  return (
    <div className="space-y-10">
      <HeroVN />
      <div className="grid md:grid-cols-2 gap-6">
        <Quiz/>
        <Poll/>
      </div>
    </div>
  )
}
