import { useState } from "react";
import { QUIZ } from "../data/quiz";

export default function Quiz(){
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number|null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<null | boolean>(null); // đúng/sai của câu hiện tại
  const q = QUIZ[idx];

  const submit = ()=>{
    if(selected===null) return;
    const correct = selected === q.answerIdx;
    setAnswered(correct);
    if(correct) setScore(s => s + 1);
  };

  const next = ()=>{
    if(idx < QUIZ.length - 1){
      setIdx(idx + 1);
      setSelected(null);
      setAnswered(null);
    }
  };

  const restart = ()=>{
    setIdx(0);
    setSelected(null);
    setScore(0);
    setAnswered(null);
  };

  const progress = Math.round(((idx) / QUIZ.length) * 100);
  const finished = idx === QUIZ.length - 1 && answered !== null;

  return (
    <div className="glass p-5 rounded-2xl border border-white/10">
      <div className="flex items-center justify-between">
        <div className="text-sm text-white/70">Quiz nhanh – Đại đoàn kết dân tộc</div>
        <div className="text-sm text-white/80">Điểm: <span className="font-semibold">{score}</span>/<span>{QUIZ.length}</span></div>
      </div>

      <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <div className="h-2 bg-brand-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-4 font-semibold">{q.q}</div>

      <div className="mt-3 grid gap-2">
        {q.choices.map((c,i)=>(
          <label key={i}
                 className={`block p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer
                 ${selected===i?"ring-2 ring-brand-400":""}
                 ${answered!==null && i===q.answerIdx ? "border-green-500/60" : ""}`}>
            <input
              type="radio"
              className="mr-2"
              name={`quiz-${idx}`}
              checked={selected===i}
              onChange={()=> answered===null && setSelected(i)}
              disabled={answered!==null}
            />
            {c}
          </label>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        {answered===null ? (
          <button onClick={submit} className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500">
            Trả lời
          </button>
        ) : idx < QUIZ.length - 1 ? (
          <button onClick={next} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">
            Câu tiếp
          </button>
        ) : (
          <button onClick={restart} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">
            Làm lại
          </button>
        )}
      </div>

      {answered!==null && (
        <div className={`mt-3 p-3 rounded-xl border
                        ${answered ? "bg-green-500/10 border-green-500/40" : "bg-red-500/10 border-red-500/40"}`}>
          <div className="font-medium">{answered ? "Chính xác!" : "Chưa đúng."}</div>
          <div className="mt-1 text-sm opacity-90">{q.explain}</div>
        </div>
      )}

      {finished && (
        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="font-semibold mb-1">Hoàn thành!</div>
          <div className="text-sm opacity-90">Bạn đạt {score}/{QUIZ.length}. Bấm “Làm lại” để thi lại.</div>
        </div>
      )}
    </div>
  );
}
