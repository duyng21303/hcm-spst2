import { useState } from "react";
import { QUIZ } from "../data/quiz";

export default function Quiz(){
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number|null>(null);
  const q = QUIZ[idx];

  const submit = ()=>{
    if(selected===null) return;
    const correct = selected===q.answerIdx;
    alert(correct ? "Chính xác!" : "Chưa đúng. Hãy thử lại.");
    if(idx < QUIZ.length-1){ setIdx(idx+1); setSelected(null); }
  };

  return (
    <div className="glass p-5">
      <div className="text-sm text-white/70">Quiz nhanh</div>
      <div className="mt-2 font-semibold">{q.q}</div>
      <div className="mt-3 grid gap-2">
        {q.choices.map((c,i)=>(
          <label key={i} className={`block p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer ${selected===i?"ring-2 ring-brand-400":""}`}>
            <input type="radio" className="mr-2" name="quiz" checked={selected===i} onChange={()=>setSelected(i)} />
            {c}
          </label>
        ))}
      </div>
      <button onClick={submit} className="mt-3 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500">Trả lời</button>
    </div>
  )
}
