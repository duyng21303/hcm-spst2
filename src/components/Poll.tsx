import { useAppStore } from "../store/useAppStore";

export default function Poll(){
  const poll = useAppStore(s=>s.poll);
  const vote = useAppStore(s=>s.vote);
  const total = poll.agree + poll.neutral + poll.disagree || 1;

  return (
    <div className="glass p-5">
      <div className="text-sm text-white/70">Poll: Bạn thấy “đoàn kết” cần gắn với tranh luận dân chủ?</div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button className="badge" onClick={()=>vote("agree")}>Có</button>
        <button className="badge" onClick={()=>vote("neutral")}>Tuỳ</button>
        <button className="badge" onClick={()=>vote("disagree")}>Không</button>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <Bar label="Có" value={poll.agree/total*100}/>
        <Bar label="Tuỳ" value={poll.neutral/total*100}/>
        <Bar label="Không" value={poll.disagree/total*100}/>
      </div>
      <div className="text-xs text-white/60 mt-2">Lượt: {total}</div>
    </div>
  )
}

function Bar({label, value}:{label:string; value:number}){
  return (
    <div>
      <div className="flex justify-between"><span>{label}</span><span>{value.toFixed(0)}%</span></div>
      <div className="h-2 bg-white/10 rounded">
        <div className="h-2 rounded bg-gradient-to-r from-brand-500 via-deep-500 to-accent-500" style={{width:`${value}%`}}/>
      </div>
    </div>
  )
}
