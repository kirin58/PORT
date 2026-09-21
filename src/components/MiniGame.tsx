"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GRID = 17;
const CELL = 20;
const SIZE = GRID * CELL;

type Point = { x: number; y: number };

function randomFood(snake: Point[]): Point {
  for (;;) {
    const p = {
      x: Math.floor(Math.random() * GRID),
      y: Math.floor(Math.random() * GRID),
    };
    if (!snake.some((s) => s.x === p.x && s.y === p.y)) return p;
  }
}

export default function MiniGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef<Point[]>([{ x: 8, y: 8 }]);
  const dirRef = useRef<Point>({ x: 1, y: 0 });
  const pendingRef = useRef<Point>({ x: 1, y: 0 });
  const foodRef = useRef<Point>({ x: 12, y: 8 });
  const scoreRef = useRef(0);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [running, setRunning] = useState(false);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    setBest(Number(window.localStorage.getItem("snake-best") ?? 0));
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#f3faf4";
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = "#e3f5e9";
    for (let y = 0; y < GRID; y++) {
      for (let x = 0; x < GRID; x++) {
        if ((x + y) % 2 === 0) ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
      }
    }

    const f = foodRef.current;
    ctx.font = `${CELL - 3}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🍃", f.x * CELL + CELL / 2, f.y * CELL + CELL / 2 + 1);

    snakeRef.current.forEach((s, i) => {
      ctx.fillStyle = i === 0 ? "#047857" : "#34d399";
      ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
      if (i === 0) {
        ctx.fillStyle = "#ffffff";
        const cx = s.x * CELL + CELL / 2;
        const cy = s.y * CELL + CELL / 2;
        ctx.fillRect(cx - 5, cy - 4, 3, 3);
        ctx.fillRect(cx + 2, cy - 4, 3, 3);
      }
    });
  }, []);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    if (!running) return;
    const speed = Math.max(70, 140 - scoreRef.current * 4);
    const id = setInterval(() => {
      dirRef.current = pendingRef.current;
      const head = snakeRef.current[0];
      const nh = { x: head.x + dirRef.current.x, y: head.y + dirRef.current.y };
      const hitWall = nh.x < 0 || nh.y < 0 || nh.x >= GRID || nh.y >= GRID;
      const willGrow =
        nh.x === foodRef.current.x && nh.y === foodRef.current.y;
      const body = willGrow ? snakeRef.current : snakeRef.current.slice(0, -1);
      const hitSelf = body.some((s) => s.x === nh.x && s.y === nh.y);

      if (hitWall || hitSelf) {
        setRunning(false);
        setDead(true);
        setBest((b) => {
          const nb = Math.max(b, scoreRef.current);
          window.localStorage.setItem("snake-best", String(nb));
          return nb;
        });
        return;
      }

      const ns = [nh, ...snakeRef.current];
      if (willGrow) {
        scoreRef.current += 1;
        setScore(scoreRef.current);
        foodRef.current = randomFood(ns);
      } else {
        ns.pop();
      }
      snakeRef.current = ns;
      draw();
    }, speed);
    return () => clearInterval(id);
  }, [running, score, draw]);

  const start = useCallback(() => {
    snakeRef.current = [{ x: 8, y: 8 }];
    dirRef.current = { x: 1, y: 0 };
    pendingRef.current = { x: 1, y: 0 };
    foodRef.current = randomFood(snakeRef.current);
    scoreRef.current = 0;
    setScore(0);
    setDead(false);
    setRunning(true);
    draw();
  }, [draw]);

  const steer = useCallback(
    (x: number, y: number) => {
      const d = dirRef.current;
      if (d.x === -x && d.y === -y) return;
      pendingRef.current = { x, y };
      if (!running && !dead) start();
    },
    [running, dead, start]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, Point> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const p = map[e.key];
      if (p) {
        e.preventDefault();
        steer(p.x, p.y);
      } else if (e.key === " ") {
        e.preventDefault();
        if (!running) start();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [running, steer, start]);

  return (
    <section id="minigame" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14">
      <p className="text-center text-sm font-semibold tracking-widest text-emerald-600">
        HAVE FUN
      </p>
      <h2 className="mt-2 text-center text-3xl font-bold text-emerald-950">
        มุมพักผ่อน 🎮
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-emerald-800/70">
        พักสายตาจากเรซูเม่แป๊บ — เล่นงูกินใบไม้ที่ผมเขียนด้วย Canvas + React
        ใช้ปุ่มลูกศร / WASD หรือปุ่มบนจอก็ได้
      </p>

      <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-[auto_1fr]">
        <div className="mx-auto rounded-3xl border border-emerald-100 bg-white p-4 shadow-md shadow-emerald-100">
          <canvas
            ref={canvasRef}
            width={SIZE}
            height={SIZE}
            className="h-auto w-full max-w-[340px] rounded-2xl"
          />
        </div>

        <div className="flex flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl bg-[#f3faf4] p-3">
              <p className="text-3xl font-bold text-emerald-600">{score}</p>
              <p className="text-xs text-emerald-800">คะแนน</p>
            </div>
            <div className="rounded-2xl bg-[#f3faf4] p-3">
              <p className="text-3xl font-bold text-lime-600">{best}</p>
              <p className="text-xs text-emerald-800">ดีที่สุด 🏆</p>
            </div>
          </div>

          {dead && (
            <p className="mt-3 rounded-2xl bg-red-50 px-4 py-2 text-center text-sm font-semibold text-red-600">
              งูชนแล้ว! ได้ {score} แต้ม — เอาใหม่ไหม? 🐍
            </p>
          )}
          {!running && !dead && (
            <p className="mt-3 rounded-2xl bg-emerald-50 px-4 py-2 text-center text-sm text-emerald-700">
              กดเริ่มแล้วพางูไปกิน 🍃 ยิ่งกินยิ่งเร็ว!
            </p>
          )}

          <button
            onClick={start}
            className="mt-4 rounded-2xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-700"
          >
            {dead ? "เล่นอีกครั้ง ↻" : running ? "เริ่มใหม่ ↻" : "เริ่มเกม ▶"}
          </button>

          <div className="mx-auto mt-4 grid w-36 grid-cols-3 gap-1.5">
            <span />
            <button onClick={() => steer(0, -1)} aria-label="up" className="rounded-xl bg-emerald-100 py-2 text-lg hover:bg-emerald-200">▲</button>
            <span />
            <button onClick={() => steer(-1, 0)} aria-label="left" className="rounded-xl bg-emerald-100 py-2 text-lg hover:bg-emerald-200">◀</button>
            <button onClick={() => steer(0, 1)} aria-label="down" className="rounded-xl bg-emerald-100 py-2 text-lg hover:bg-emerald-200">▼</button>
            <button onClick={() => steer(1, 0)} aria-label="right" className="rounded-xl bg-emerald-100 py-2 text-lg hover:bg-emerald-200">▶</button>
          </div>
        </div>
      </div>
    </section>
  );
}
