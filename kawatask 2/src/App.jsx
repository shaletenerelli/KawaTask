import { useState } from "react";

const C = {
  bg: "#F5EDE4", card: "#FFFFFF", cream: "#FAF3EC",
  brown: "#8B6F5E", brownLight: "#C4A898", border: "#E8D8CC",
  gold: "#E8C850", goldDark: "#A08020", gem: "#8B72D0",
  text: "#3A2820", textMid: "#7A5848", textLight: "#B89888",
};

const TIER_COLORS = {
  starter:  { bg: "#E8F5EC", color: "#2E7D52" },
  standard: { bg: "#EDE5FF", color: "#5E43C0" },
  rare:     { bg: "#FFF0D8", color: "#B05A10" },
  basic:    { bg: "#F0EDE8", color: "#7A6050" },
};

const ALL_CHARACTERS = [
  { id: "char_1",       name: "Maple",  desc: "Autumn lover with a tote bag full of cozy vibes.",                     tier: "starter",  cost: 3, img: "/images/characters/char_1.png" },
  { id: "char_2",       name: "Kai",    desc: "Cheerful boy who never goes anywhere without his coffee.",             tier: "starter",  cost: 3, img: "/images/characters/char_2.png" },
  { id: "char_3",       name: "Sage",   desc: "Calm girl always holding something warm.",                             tier: "starter",  cost: 3, img: "/images/characters/char_3.png" },
  { id: "char_starter", name: "Sunny",  desc: "Cozy bookworm who loves autumn reads and warm sweaters.",              tier: "starter",  cost: 3, img: "/images/characters/char_starter.png" },
  { id: "char_4",       name: "Marcus", desc: "Adventurous boy with a striped scarf and trusty backpack.",            tier: "standard", cost: 5, img: "/images/characters/char_4.png" },
  { id: "char_5",       name: "Layla",  desc: "Stylish girl with a crossbody bag and effortless cool.",               tier: "standard", cost: 5, img: "/images/characters/char_5.png" },
  { id: "char_6",       name: "Fern",   desc: "Freckled redhead with pigtails and a vintage satchel.",                tier: "standard", cost: 5, img: "/images/characters/char_6.png" },
  { id: "char_10",      name: "River",  desc: "Creative soul with teal hair, a notebook, and a pencil.",              tier: "standard", cost: 5, img: "/images/characters/char_10.png" },
  { id: "char_12",      name: "Jin",    desc: "A boy who runs on hot cocoa, cozy coats, and quiet winter mornings.",  tier: "standard", cost: 5, img: "/images/characters/char_12.png" },
  { id: "char_7",       name: "Theo",   desc: "Preppy boy in a blazer who takes notes on everything.",                tier: "rare",     cost: 8, img: "/images/characters/char_7.png" },
  { id: "char_8",       name: "Remy",   desc: "Sporty boy in a varsity jacket with a warm scarf.",                    tier: "rare",     cost: 8, img: "/images/characters/char_8.png" },
  { id: "char_9",       name: "Milo",   desc: "Dreamy boy with lavender hair and headphones always ready.",            tier: "rare",     cost: 8, img: "/images/characters/char_9.png" },
  { id: "char_11",      name: "Wren",   desc: "Quiet artist with dark hair and a patchwork sweater.",                 tier: "rare",     cost: 8, img: "/images/characters/char_11.png" },
];

const STARTER_CHARS = ALL_CHARACTERS.filter(c => c.tier === "starter");

const ACCESSORIES = [
  { id: "acc_bow_gold_clip", name: "Gold Bow Clip",   category: "hat",  tier: "basic",    cost: 15,  img: "/images/accessories/bow_gold_clip.png" },
  { id: "acc_beanie",        name: "Pom Beanie",      category: "hat",  tier: "basic",    cost: 20,  img: "/images/accessories/beanie.png" },
  { id: "acc_claw_clip",     name: "Gold Claw Clip",  category: "hat",  tier: "basic",    cost: 15,  img: "/images/accessories/claw_clip.png" },
  { id: "acc_ribbon_bow",    name: "Ribbon Bow",      category: "hat",  tier: "standard", cost: 40,  img: "/images/accessories/ribbon_bow.png" },
  { id: "acc_pearl_clip",    name: "Pearl Snap Clip", category: "hat",  tier: "standard", cost: 45,  img: "/images/accessories/pearl_clip.png" },
  { id: "acc_sage_bow",      name: "Sage Bow",        category: "hat",  tier: "rare",     cost: 80,  img: "/images/accessories/sage_bow.png" },
  { id: "acc_backpack",      name: "Green Backpack",  category: "hat",  tier: "standard", cost: 50,  img: "/images/accessories/backpack.png" },
  { id: "acc_bird",          name: "Little Bird",     category: "pet",  tier: "basic",    cost: 30,  img: "/images/accessories/bird.png" },
  { id: "acc_cat",           name: "White Kitten",    category: "pet",  tier: "standard", cost: 60,  img: "/images/accessories/cat.png" },
  { id: "acc_puppy",         name: "Fluffy Puppy",    category: "pet",  tier: "rare",     cost: 100, img: "/images/accessories/puppy.png" },
  { id: "bg_autumn_leaves",  name: "Autumn Leaves",   category: "bg",   tier: "standard", cost: 45,  img: "/images/backgrounds/autumn_leaves.png" },
  { id: "bg_plaid",          name: "Cozy Plaid",      category: "bg",   tier: "standard", cost: 45,  img: "/images/backgrounds/plaid.png" },
  { id: "bg_knit",           name: "Knit Texture",    category: "bg",   tier: "basic",    cost: 25,  img: "/images/backgrounds/knit.png" },
  { id: "bg_ornate_frame",   name: "Ornate Frame",    category: "bg",   tier: "basic",    cost: 25,  img: "/images/backgrounds/ornate_frame.png" },
  { id: "bg_plant_nook",     name: "Plant Nook",      category: "bg",   tier: "rare",     cost: 80,  img: "/images/backgrounds/plant_nook.png" },
  { id: "bg_cozy_library",   name: "Cozy Library",    category: "bg",   tier: "rare",     cost: 80,  img: "/images/backgrounds/cozy_library.png" },
  { id: "bg_dreamy_sky",     name: "Dreamy Sky",      category: "bg",   tier: "rare",     cost: 80,  img: "/images/backgrounds/dreamy_sky.png" },
  { id: "bg_storybook",      name: "Storybook Nook",  category: "bg",   tier: "rare",     cost: 80,  img: "/images/backgrounds/storybook.png" },
];

const CAT_LABELS = { hat: "Hats & Clips", pet: "Pets", bg: "Backgrounds" };
const GOLD_MAP   = { E: 5, M: 10, D: 20 };
const PENALTY_MAP = { E: 2, M: 4, D: 7 };
const DIFF_LABEL = { E: "Easy", M: "Medium", D: "Difficult" };
const DIFF_COLOR = {
  E: { bg: "#E8F5EC", color: "#2E7D52", border: "#A8D8B8" },
  M: { bg: "#FFF8E8", color: "#A06010", border: "#E8C870" },
  D: { bg: "#FFE8E8", color: "#B03030", border: "#E8A8A8" },
};

const CLIP_IDS = ["acc_bow_gold_clip", "acc_claw_clip", "acc_pearl_clip", "acc_sage_bow", "acc_ribbon_bow", "acc_backpack"];

// ── Components ────────────────────────────────────────────────────────────────

function TierBadge({ tier }) {
  const t = TIER_COLORS[tier] || TIER_COLORS.basic;
  const labels = { starter: "starter", standard: "standard", rare: "✦ rare", basic: "basic" };
  return <span style={{ background: t.bg, color: t.color, fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>{labels[tier] || tier}</span>;
}

function CurrencyBar({ gold, gems }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#FFFBEA", border: "2px solid #E8C850", borderRadius: 20, padding: "4px 14px" }}>
        <span style={{ fontSize: 15 }}>🪙</span><span style={{ fontWeight: 800, color: "#A08020", fontSize: 15 }}>{gold}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#E8E0F8", border: "2px solid #A899D4", borderRadius: 20, padding: "4px 14px" }}>
        <span style={{ fontSize: 16 }}>💎</span><span style={{ fontWeight: 800, color: "#6B52B0", fontSize: 15 }}>{gems}</span>
      </div>
    </div>
  );
}

function Toast({ msg, type }) {
  if (!msg) return null;
  const s = { success: { bg: "#E8F8EE", color: "#207840" }, error: { bg: "#FFE8E8", color: "#C03030" }, gem: { bg: "#E8E0F8", color: "#6B52B0" } }[type] || { bg: "#E8F8EE", color: "#207840" };
  return <div style={{ position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", background: s.bg, color: s.color, borderRadius: 20, padding: "10px 24px", fontWeight: 700, fontSize: 13, zIndex: 1000, boxShadow: "0 4px 24px rgba(0,0,0,0.12)", animation: "fadeUp 0.25s ease", whiteSpace: "nowrap", fontFamily: "inherit" }}>{msg}</div>;
}

function CharacterDisplay({ char, equippedAccs, size = 200, positions, onPosChange, draggable = false }) {
  const bg   = equippedAccs.find(a => a.category === "bg");
  const hat  = equippedAccs.find(a => a.category === "hat");
  const pet  = equippedAccs.find(a => a.category === "pet");
  const isClip = hat && CLIP_IDS.includes(hat.id);

  const padH   = size * 0.25;
  const totalW = size + padH * 2;
  const totalH = size * 1.2;

  function getOffset(key) {
    return (positions && positions[key]) || { dx: 0, dy: 0 };
  }

  function makeDragHandlers(key) {
    if (!draggable || !onPosChange) return {};
    return {
      draggable: true,
      onDragStart: e => {
        e.stopPropagation();
        e.dataTransfer.setData("drag-key", key);
        e.dataTransfer.setData("drag-ox", e.clientX);
        e.dataTransfer.setData("drag-oy", e.clientY);
      },
    };
  }

  function handleDrop(e) {
    if (!draggable || !onPosChange) return;
    e.preventDefault();
    const key = e.dataTransfer.getData("drag-key");
    const ox  = parseFloat(e.dataTransfer.getData("drag-ox"));
    const oy  = parseFloat(e.dataTransfer.getData("drag-oy"));
    if (!key) return;
    const prev = getOffset(key);
    onPosChange(key, { dx: (prev.dx || 0) + (e.clientX - ox), dy: (prev.dy || 0) + (e.clientY - oy) });
  }

  const clipSize = size * 0.2;
  const hatSize  = size * 0.5;

  function placed(key, baseX, baseY, extra = {}) {
    const { dx, dy } = getOffset(key);
    return { position: "absolute", left: baseX + (dx || 0), top: baseY + (dy || 0), objectFit: "contain", cursor: draggable ? "grab" : "default", userSelect: "none", ...extra };
  }

  return (
    <div onDrop={handleDrop} onDragOver={e => draggable && e.preventDefault()}
      style={{ position: "relative", width: totalW, height: totalH, display: "inline-block" }}>
      <div style={{ position: "absolute", left: padH, top: 0, width: size, height: totalH, borderRadius: 20, overflow: "hidden", zIndex: 0 }}>
        {bg ? <img src={bg.img} alt={bg.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <div style={{ width: "100%", height: "100%", background: C.cream }} />}
      </div>
      {hat && !isClip && (
        <img src={hat.img} alt={hat.name} {...makeDragHandlers("hat")}
          style={placed("hat", padH + size / 2 - hatSize / 2, -size * 0.08, { width: hatSize, zIndex: 4 })} />
      )}
      {hat && isClip && (
        <img src={hat.img} alt={hat.name} {...makeDragHandlers("hat")}
          style={placed("hat", padH + size * 0.55, totalH * 0.08, { width: clipSize, zIndex: 4 })} />
      )}
      <img src={char.img} alt={char.customName} {...makeDragHandlers("char")}
        style={placed("char", padH + size / 2 - size * 0.46, totalH - size, { height: size, zIndex: 2 })} />
      {pet && (
        <img src={pet.img} alt={pet.name} {...makeDragHandlers("pet")}
          style={placed("pet", totalW - padH * 0.1 - size * 0.4, totalH - size * 0.44, { width: size * 0.4, zIndex: 3 })} />
      )}
      {draggable && (
        <div style={{ position: "absolute", bottom: -26, left: "50%", transform: "translateX(-50%)", fontSize: 11, color: C.textLight, whiteSpace: "nowrap", fontWeight: 600 }}>
          ✦ drag anything to reposition
        </div>
      )}
    </div>
  );
}

// ── Onboarding ────────────────────────────────────────────────────────────────
function OnboardingScreen({ onComplete }) {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState("pick");
  const [charName, setCharName] = useState("");

  function handleNext() {
    if (step === "pick" && selected) { setStep("name"); setCharName(selected.name); }
    else if (step === "name" && charName.trim()) { onComplete(selected.id, charName.trim()); }
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 16px 50px", fontFamily: "inherit" }}>
      <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 32, fontWeight: 800, color: C.brown, marginBottom: 6 }}>🌸 KawaTask</div>

      {step === "pick" && <>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 4 }}>Choose your starter character!</div>
        <div style={{ fontSize: 13, color: C.textMid, marginBottom: 24, textAlign: "center", maxWidth: 380 }}>This one is free. Earn gems to unlock more!</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, width: "100%", maxWidth: 500, marginBottom: 24 }}>
          {STARTER_CHARS.map(char => (
            <div key={char.id} onClick={() => setSelected(char)}
              style={{ background: selected?.id === char.id ? C.cream : "white", border: `3px solid ${selected?.id === char.id ? C.brownLight : C.border}`, borderRadius: 24, padding: "18px 12px 14px", textAlign: "center", cursor: "pointer", transition: "all 0.18s", transform: selected?.id === char.id ? "translateY(-3px)" : "none", boxShadow: selected?.id === char.id ? "0 8px 24px rgba(139,111,94,0.15)" : "none" }}>
              <img src={char.img} alt={char.name} style={{ height: 130, objectFit: "contain", display: "block", margin: "0 auto 10px" }} />
              <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 17, fontWeight: 800, color: C.text }}>{char.name}</div>
              <div style={{ fontSize: 11, color: C.textMid, marginTop: 3, lineHeight: 1.4 }}>{char.desc}</div>
              {selected?.id === char.id && <div style={{ marginTop: 8, fontSize: 10, fontWeight: 800, color: C.brown, background: C.border, borderRadius: 10, padding: "2px 10px", display: "inline-block" }}>Selected ✓</div>}
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={!selected}
          style={{ padding: "13px 40px", borderRadius: 22, border: "none", background: selected ? C.brown : C.border, color: selected ? "white" : C.textLight, fontWeight: 800, fontSize: 15, cursor: selected ? "pointer" : "default", fontFamily: "inherit", transition: "all 0.18s" }}>
          Choose {selected ? selected.name : "..."} →
        </button>
      </>}

      {step === "name" && selected && <>
        <img src={selected.img} alt={selected.name} style={{ height: 170, objectFit: "contain", marginBottom: 12 }} />
        <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 4 }}>Name your character!</div>
        <div style={{ fontSize: 13, color: C.textMid, marginBottom: 20 }}>Use their name or make up your own.</div>
        <input value={charName} onChange={e => setCharName(e.target.value)} onKeyDown={e => e.key === "Enter" && handleNext()}
          placeholder={`e.g. "${selected.name}"`} maxLength={20}
          style={{ padding: "12px 20px", borderRadius: 16, border: `2px solid ${C.border}`, background: "white", fontSize: 16, fontFamily: "inherit", color: C.text, outline: "none", width: 260, textAlign: "center", marginBottom: 20, fontWeight: 700 }} />
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setStep("pick")} style={{ padding: "11px 22px", borderRadius: 18, border: `2px solid ${C.border}`, background: "white", color: C.textMid, fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>← Back</button>
          <button onClick={handleNext} disabled={!charName.trim()}
            style={{ padding: "11px 28px", borderRadius: 18, border: "none", background: charName.trim() ? C.brown : C.border, color: charName.trim() ? "white" : C.textLight, fontWeight: 800, fontSize: 14, cursor: charName.trim() ? "pointer" : "default", fontFamily: "inherit" }}>
            Start my adventure! 🌸
          </button>
        </div>
      </>}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [onboarded, setOnboarded]   = useState(false);
  const [gold, setGold]             = useState(50);
  const [gems, setGems]             = useState(5);
  const [activeId, setActiveId]     = useState(null);
  const [characters, setCharacters] = useState(ALL_CHARACTERS.map(c => ({ ...c, owned: false, customName: c.name })));
  const [accessories, setAccessories] = useState(ACCESSORIES.map(a => ({ ...a, owned: false })));
  const [equipped, setEquipped]     = useState({});
  const [charPositions, setCharPositions] = useState({});
  const [page, setPage]             = useState("dashboard");
  const [shopTab, setShopTab]       = useState("characters");
  const [accFilter, setAccFilter]   = useState("all");
  const [toast, setToast]           = useState({ msg: "", type: "" });
  const [confirm, setConfirm]       = useState(null);
  const [tasks, setTasks]           = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskDiff, setNewTaskDiff] = useState("E");
  const [completedToday, setCompletedToday] = useState(false);

  const active       = characters.find(c => c.id === activeId);
  const charEquipped = equipped[activeId] || {};
  const equippedAccs = accessories.filter(a => Object.values(charEquipped).includes(a.id));
  const doneTasks    = tasks.filter(t => t.done).length;
  const totalTasks   = tasks.length;
  const allDone      = totalTasks > 0 && doneTasks === totalTasks;

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: "" }), 2600);
  }

  function handleOnboardingComplete(charId, customName) {
    setCharacters(prev => prev.map(c => c.id === charId ? { ...c, owned: true, customName } : c));
    setActiveId(charId);
    setEquipped({ [charId]: {} });
    setOnboarded(true);
  }

  function buyChar(char) {
    if (gems < char.cost) { showToast(`Need ${char.cost - gems} more 💎`, "error"); return; }
    setGems(g => g - char.cost);
    setCharacters(prev => prev.map(c => c.id === char.id ? { ...c, owned: true } : c));
    setEquipped(prev => ({ ...prev, [char.id]: {} }));
    showToast(`${char.customName} joined your team! 🎉`, "gem");
    setConfirm(null);
  }

  function buyAcc(acc) {
    if (gold < acc.cost) { showToast(`Need ${acc.cost - gold} more 🪙`, "error"); return; }
    setGold(g => g - acc.cost);
    setAccessories(prev => prev.map(a => a.id === acc.id ? { ...a, owned: true } : a));
    showToast(`Got ${acc.name}! Equip it in your closet ✨`);
    setConfirm(null);
  }

  function toggleEquip(acc) {
    if (!acc.owned) return;
    setEquipped(prev => {
      const cur = { ...(prev[activeId] || {}) };
      if (cur[acc.category] === acc.id) { delete cur[acc.category]; }
      else { cur[acc.category] = acc.id; }
      return { ...prev, [activeId]: cur };
    });
  }

  function addTask() {
    if (!newTaskText.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: newTaskText.trim(), diff: newTaskDiff, done: false }]);
    setNewTaskText("");
  }

  function toggleTask(id) {
    setTasks(prev => {
      const task = prev.find(t => t.id === id);
      if (!task) return prev;
      const updated = prev.map(t => t.id === id ? { ...t, done: !t.done } : t);
      if (!task.done) {
        setGold(g => g + GOLD_MAP[task.diff]);
        showToast(`+${GOLD_MAP[task.diff]} 🪙`, "success");
        const allNowDone = updated.every(t => t.done);
        if (allNowDone && !completedToday) {
          const pts = updated.reduce((s, t) => s + GOLD_MAP[t.diff], 0);
          const gemCount = pts >= 60 ? 2 : 1;
          setTimeout(() => {
            setGems(g => g + gemCount);
            showToast(`Perfect day! +${gemCount} 💎`, "gem");
            setCompletedToday(true);
          }, 600);
        }
      } else {
        setGold(g => Math.max(0, g - GOLD_MAP[task.diff]));
      }
      return updated;
    });
  }

  function removeTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@700;800&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    @keyframes fadeUp { from { opacity:0; transform:translateX(-50%) translateY(8px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
    @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
    .float { animation: float 3.5s ease-in-out infinite; display: inline-block; }
    .card-hover { transition: transform 0.18s, box-shadow 0.18s; cursor: pointer; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(139,111,94,0.15); }
    .btn { transition: all 0.15s; cursor: pointer; }
    .btn:hover { filter: brightness(1.06); }
    .btn:active { transform: scale(0.96); }
    .nav-btn { transition: all 0.18s; }
    .nav-btn:hover { background: #EFE0D4 !important; }
    input:focus { border-color: #C4A898 !important; box-shadow: 0 0 0 3px rgba(196,168,152,0.2); }
    .pill { transition: all 0.15s; cursor: pointer; }
    .task-row:hover { background: #FDFAF7 !important; }
    .del-btn:hover { color: #C03030 !important; }
  `;

  if (!onboarded) return (
    <div style={{ fontFamily: "'Nunito', cursive, sans-serif" }}>
      <style>{CSS}</style>
      <OnboardingScreen onComplete={handleOnboardingComplete} />
    </div>
  );

  const accCategories = ["all", "hat", "pet", "bg"];
  const filteredAccs  = accessories.filter(a => accFilter === "all" || a.category === accFilter);

  return (
    <div style={{ fontFamily: "'Nunito', cursive, sans-serif", background: C.bg, minHeight: "100vh", color: C.text }}>
      <style>{CSS}</style>
      <Toast msg={toast.msg} type={toast.type} />

      {/* Confirm modal */}
      {confirm && (
        <div onClick={() => setConfirm(null)} style={{ position: "fixed", inset: 0, background: "rgba(58,40,32,0.5)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: C.card, borderRadius: 28, padding: "28px 24px", maxWidth: 300, width: "100%", textAlign: "center", border: `3px solid ${C.border}` }}>
            <img src={confirm.img} alt={confirm.name || confirm.customName}
              style={{ height: confirm.type === "char" ? 160 : 90, objectFit: "contain", display: "block", margin: "0 auto 10px", borderRadius: confirm.category === "bg" ? 12 : 0, width: confirm.category === "bg" ? 180 : "auto" }} />
            <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 21, fontWeight: 800, marginBottom: 4 }}>{confirm.name || confirm.customName}</div>
            <div style={{ fontSize: 12, color: C.textMid, marginBottom: 8 }}>{confirm.desc}</div>
            <TierBadge tier={confirm.tier} />
            <div style={{ fontSize: 17, fontWeight: 800, color: confirm.type === "char" ? "#6B52B0" : "#A08020", margin: "14px 0 18px" }}>
              {confirm.type === "char" ? `💎 ${confirm.cost} Gems` : `🪙 ${confirm.cost} Gold`}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn" onClick={() => setConfirm(null)} style={{ flex: 1, padding: "11px", borderRadius: 14, border: `2px solid ${C.border}`, background: "white", fontWeight: 700, fontSize: 13, color: C.textMid, fontFamily: "inherit", cursor: "pointer" }}>Cancel</button>
              <button className="btn" onClick={() => confirm.type === "char" ? buyChar(confirm) : buyAcc(confirm)}
                style={{ flex: 1, padding: "11px", borderRadius: 14, border: "none", background: confirm.type === "char" ? (gems >= confirm.cost ? "#8B72D0" : C.border) : (gold >= confirm.cost ? C.gold : "#E0D8C8"), color: confirm.type === "char" ? "white" : C.text, fontWeight: 800, fontSize: 13, fontFamily: "inherit", cursor: "pointer" }}>
                {confirm.type === "char" ? "Adopt! ✨" : "Buy! 🛍️"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ background: C.card, borderBottom: `3px solid ${C.border}`, padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(139,111,94,0.08)" }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 24, fontWeight: 800, color: C.brown }}>🌸 KawaTask</div>
        <CurrencyBar gold={gold} gems={gems} />
      </div>

      {/* Nav */}
      <div style={{ display: "flex", gap: 6, padding: "14px 16px 0", justifyContent: "center", flexWrap: "wrap" }}>
        {[["dashboard", "📋 Tasks"], ["character", "My Character"], ["shop", "Shop"], ["closet", "Closet"]].map(([id, label]) => (
          <button key={id} className="nav-btn" onClick={() => setPage(id)}
            style={{ padding: "8px 16px", borderRadius: 22, border: `2px solid ${page === id ? C.brownLight : C.border}`, background: page === id ? C.cream : "white", color: page === id ? C.brown : C.textMid, fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "20px 16px 60px" }}>

        {/* ── DASHBOARD ── */}
        {page === "dashboard" && (
          <div>
            {/* Hero */}
            <div style={{ background: C.cream, borderRadius: 28, border: `3px solid ${C.border}`, padding: "20px 24px", marginBottom: 18, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              {active && (
                <div style={{ flexShrink: 0 }}>
                  <CharacterDisplay char={active} equippedAccs={equippedAccs} size={110} positions={charPositions[activeId]} />
                </div>
              )}
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 2 }}>
                  {active ? `Hi, ${active.customName}!` : "Welcome!"}
                </div>
                <div style={{ fontSize: 13, color: C.textMid, marginBottom: 12 }}>What's on your list today?</div>
                <CurrencyBar gold={gold} gems={gems} />
                {totalTasks > 0 && (
                  <div style={{ marginTop: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, color: C.textMid, marginBottom: 5 }}>
                      <span>{doneTasks}/{totalTasks} tasks done</span>
                      {allDone && <span style={{ color: "#2E7D52" }}>Perfect day! 🌟</span>}
                    </div>
                    <div style={{ height: 8, background: C.border, borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(doneTasks / totalTasks) * 100}%`, background: allDone ? "#8ECBAB" : C.brownLight, borderRadius: 8, transition: "width 0.4s ease" }} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Task list */}
            <div style={{ background: "white", borderRadius: 24, border: `3px solid ${C.border}`, overflow: "hidden", marginBottom: 16 }}>
              {tasks.length === 0 ? (
                <div style={{ padding: "36px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>✨</div>
                  <div style={{ fontWeight: 700, color: C.textMid, fontSize: 14 }}>No tasks yet!</div>
                  <div style={{ fontSize: 12, color: C.textLight, marginTop: 4 }}>Add something below to get started.</div>
                </div>
              ) : tasks.map((task, i) => {
                const dc = DIFF_COLOR[task.diff];
                return (
                  <div key={task.id} className="task-row"
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 18px", borderBottom: i < tasks.length - 1 ? `2px solid ${C.border}` : "none", background: task.done ? "#FAFAF8" : "white", transition: "background 0.2s" }}>
                    <div onClick={() => toggleTask(task.id)}
                      style={{ width: 24, height: 24, borderRadius: 8, border: `2.5px solid ${task.done ? "#8ECBAB" : C.brownLight}`, background: task.done ? "#8ECBAB" : "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, transition: "all 0.2s" }}>
                      {task.done && <span style={{ color: "white", fontSize: 14, fontWeight: 800, lineHeight: 1 }}>✓</span>}
                    </div>
                    <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: task.done ? C.textLight : C.text, textDecoration: task.done ? "line-through" : "none", transition: "all 0.2s" }}>
                      {task.text}
                    </div>
                    <span style={{ background: dc.bg, color: dc.color, border: `1.5px solid ${dc.border}`, fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 10, flexShrink: 0 }}>
                      {DIFF_LABEL[task.diff]}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#A08020", flexShrink: 0 }}>+{GOLD_MAP[task.diff]}🪙</span>
                    <div className="del-btn" onClick={() => removeTask(task.id)}
                      style={{ fontSize: 20, color: C.textLight, cursor: "pointer", flexShrink: 0, lineHeight: 1, padding: "2px 6px", borderRadius: 6, transition: "color 0.15s" }}>×</div>
                  </div>
                );
              })}
            </div>

            {/* Add task form */}
            <div style={{ background: "white", borderRadius: 22, border: `3px solid ${C.border}`, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Add a task</div>
              <input value={newTaskText} onChange={e => setNewTaskText(e.target.value)} onKeyDown={e => e.key === "Enter" && addTask()}
                placeholder="What do you need to do?"
                style={{ width: "100%", padding: "10px 14px", borderRadius: 14, border: `2px solid ${C.border}`, background: C.bg, fontSize: 14, fontFamily: "inherit", color: C.text, outline: "none", marginBottom: 10, fontWeight: 600 }} />
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                {["E","M","D"].map(d => {
                  const dc = DIFF_COLOR[d];
                  const sel = newTaskDiff === d;
                  return (
                    <button key={d} onClick={() => setNewTaskDiff(d)}
                      style={{ flex: 1, padding: "8px 6px", borderRadius: 12, border: `2px solid ${sel ? dc.border : C.border}`, background: sel ? dc.bg : "white", color: sel ? dc.color : C.textMid, fontWeight: 800, fontSize: 12, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}>
                      {DIFF_LABEL[d]}
                      <span style={{ display: "block", fontSize: 10, fontWeight: 600, marginTop: 1 }}>+{GOLD_MAP[d]}🪙</span>
                    </button>
                  );
                })}
              </div>
              <button onClick={addTask} disabled={!newTaskText.trim()}
                style={{ width: "100%", padding: "11px", borderRadius: 14, border: "none", background: newTaskText.trim() ? C.brown : C.border, color: newTaskText.trim() ? "white" : C.textLight, fontWeight: 800, fontSize: 14, cursor: newTaskText.trim() ? "pointer" : "default", fontFamily: "inherit", transition: "all 0.18s" }}>
                Add Task ＋
              </button>
            </div>
          </div>
        )}

        {/* ── CHARACTER PAGE ── */}
        {page === "character" && active && (
          <div>
            <div style={{ background: C.cream, borderRadius: 28, border: `3px solid ${C.border}`, padding: "32px 24px 28px", marginBottom: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, overflow: "visible" }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: C.textLight, textTransform: "uppercase" }}>Active Character</div>
              <div style={{ marginTop: 16, marginBottom: 32 }}>
                <CharacterDisplay char={active} equippedAccs={equippedAccs} size={200}
                  positions={charPositions[activeId]}
                  onPosChange={(key, pos) => setCharPositions(prev => ({ ...prev, [activeId]: { ...(prev[activeId] || {}), [key]: pos } }))}
                  draggable={true} />
              </div>
              <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 28, fontWeight: 800, color: C.text, marginTop: 8 }}>{active.customName}</div>
              <div style={{ fontSize: 13, color: C.textMid, textAlign: "center", maxWidth: 260 }}>{active.desc}</div>
              <TierBadge tier={active.tier} />
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight, marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Your Characters</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 10 }}>
              {characters.filter(c => c.owned).map(c => (
                <div key={c.id} className="card-hover" onClick={() => setActiveId(c.id)}
                  style={{ background: c.id === activeId ? C.cream : "white", border: `3px solid ${c.id === activeId ? C.brownLight : C.border}`, borderRadius: 22, padding: "16px 10px 12px", textAlign: "center" }}>
                  <img src={c.img} alt={c.customName} style={{ height: 90, objectFit: "contain", display: "block", margin: "0 auto 8px" }} />
                  <div style={{ fontWeight: 800, fontSize: 13, color: C.text }}>{c.customName}</div>
                  {c.id === activeId && <div style={{ marginTop: 5, fontSize: 10, fontWeight: 800, color: C.brown, background: C.border, borderRadius: 10, padding: "2px 10px", display: "inline-block" }}>ACTIVE</div>}
                </div>
              ))}
              <div className="card-hover" onClick={() => { setPage("shop"); setShopTab("characters"); }}
                style={{ background: "white", border: `3px dashed ${C.border}`, borderRadius: 22, padding: "16px 10px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, minHeight: 140 }}>
                <div style={{ fontSize: 30, color: C.border }}>＋</div>
                <div style={{ fontSize: 11, color: C.textLight, fontWeight: 700 }}>Get more</div>
              </div>
            </div>
          </div>
        )}

        {/* ── SHOP ── */}
        {page === "shop" && (
          <div>
            <div style={{ display: "flex", background: C.cream, borderRadius: 18, padding: 4, marginBottom: 20, border: `2px solid ${C.border}` }}>
              {[["characters", "✨ Characters (Gems)"], ["accessories", "🛍️ Accessories (Gold)"]].map(([id, label]) => (
                <button key={id} onClick={() => setShopTab(id)}
                  style={{ flex: 1, padding: "9px 10px", borderRadius: 14, border: "none", background: shopTab === id ? C.brown : "transparent", color: shopTab === id ? "white" : C.textMid, fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "inherit", transition: "all 0.18s" }}>
                  {label}
                </button>
              ))}
            </div>
            {shopTab === "characters" && (
              <div>
                <div style={{ fontSize: 13, color: C.textMid, marginBottom: 16, textAlign: "center" }}>You have <strong style={{ color: "#6B52B0" }}>💎 {gems}</strong> gems</div>
                {["starter","standard","rare"].map(tier => {
                  const tierChars = characters.filter(c => c.tier === tier && !c.owned);
                  if (!tierChars.length) return null;
                  const t = TIER_COLORS[tier];
                  const tierLabel = { starter: "Starter", standard: "Standard", rare: "✦ Rare" }[tier];
                  return (
                    <div key={tier} style={{ marginBottom: 28 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 17, fontWeight: 800, color: C.brown }}>{tierLabel}</div>
                        <div style={{ height: 2, flex: 1, background: C.border, borderRadius: 2 }} />
                        <div style={{ fontSize: 12, fontWeight: 700, color: t.color, background: t.bg, padding: "3px 10px", borderRadius: 10 }}>💎 {tierChars[0].cost} each</div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 12 }}>
                        {tierChars.map(char => (
                          <div key={char.id} className="card-hover" style={{ background: "white", border: `3px solid ${C.border}`, borderRadius: 24, padding: "20px 14px 16px", textAlign: "center" }}>
                            <img src={char.img} alt={char.customName} style={{ height: 150, objectFit: "contain", display: "block", margin: "0 auto 10px" }} />
                            <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 18, fontWeight: 800, color: C.text }}>{char.customName}</div>
                            <div style={{ fontSize: 11, color: C.textMid, margin: "4px 0 10px", lineHeight: 1.4 }}>{char.desc}</div>
                            <button className="btn" onClick={() => setConfirm({ ...char, type: "char" })}
                              style={{ width: "100%", padding: "9px", borderRadius: 12, border: "none", background: gems >= char.cost ? "#8B72D0" : "#E0D8F0", color: gems >= char.cost ? "white" : "#A090C0", fontWeight: 800, fontSize: 13, fontFamily: "inherit", cursor: "pointer" }}>
                              {gems >= char.cost ? `Adopt — 💎 ${char.cost}` : `Need ${char.cost - gems} more 💎`}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {shopTab === "accessories" && (
              <div>
                <div style={{ fontSize: 13, color: C.textMid, marginBottom: 14, textAlign: "center" }}>You have <strong style={{ color: "#A08020" }}>🪙 {gold}</strong> gold</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {accCategories.map(cat => (
                    <button key={cat} className="pill" onClick={() => setAccFilter(cat)}
                      style={{ padding: "5px 14px", borderRadius: 16, border: `2px solid ${accFilter === cat ? C.brownLight : C.border}`, background: accFilter === cat ? C.cream : "white", color: accFilter === cat ? C.brown : C.textMid, fontWeight: 700, fontSize: 12, fontFamily: "inherit" }}>
                      {cat === "all" ? "All" : CAT_LABELS[cat]}
                    </button>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
                  {filteredAccs.map(acc => (
                    <div key={acc.id} className={acc.owned ? "" : "card-hover"}
                      style={{ background: "white", border: `3px solid ${acc.owned ? "#8ECBAB" : C.border}`, borderRadius: 22, padding: "14px 12px", textAlign: "center", opacity: acc.owned ? 0.82 : 1 }}>
                      <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                        <img src={acc.img} alt={acc.name} style={{ maxHeight: 70, maxWidth: "100%", objectFit: "contain", borderRadius: acc.category === "bg" ? 8 : 0 }} />
                      </div>
                      <div style={{ fontWeight: 800, fontSize: 13, color: C.text, marginBottom: 5 }}>{acc.name}</div>
                      <TierBadge tier={acc.tier} />
                      <div style={{ fontWeight: 800, color: "#A08020", fontSize: 14, margin: "8px 0" }}>🪙 {acc.cost}</div>
                      <button className="btn" onClick={() => !acc.owned && setConfirm({ ...acc, type: "acc" })}
                        style={{ width: "100%", padding: "8px", borderRadius: 12, border: "none", background: acc.owned ? C.border : (gold >= acc.cost ? C.gold : "#E0D8C8"), color: acc.owned ? C.textLight : C.text, fontWeight: 800, fontSize: 12, fontFamily: "inherit", cursor: acc.owned ? "default" : "pointer" }}>
                        {acc.owned ? "Owned ✓" : gold >= acc.cost ? "Buy" : `Need ${acc.cost - gold} more 🪙`}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── CLOSET ── */}
        {page === "closet" && active && (
          <div>
            <div style={{ background: C.cream, borderRadius: 28, border: `3px solid ${C.border}`, padding: "20px 24px", marginBottom: 20, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div className="float">
                <CharacterDisplay char={active} equippedAccs={equippedAccs} size={130} positions={charPositions[activeId]} />
              </div>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: 20, fontWeight: 800, color: C.text }}>{active.customName}'s Closet</div>
                <div style={{ fontSize: 12, color: C.textMid, marginTop: 4 }}>Tap any owned item to equip or unequip it.</div>
              </div>
            </div>
            {accessories.filter(a => a.owned).length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: 13, color: C.textMid, marginBottom: 16 }}>No accessories yet! Visit the shop to get some.</div>
                <button onClick={() => { setPage("shop"); setShopTab("accessories"); }}
                  style={{ padding: "10px 24px", borderRadius: 16, border: "none", background: C.brown, color: "white", fontWeight: 800, cursor: "pointer", fontFamily: "inherit", fontSize: 14 }}>
                  Go to Shop 🛍️
                </button>
              </div>
            ) : (
              <div>
                {["hat","pet","bg"].map(cat => {
                  const catOwned = accessories.filter(a => a.category === cat && a.owned);
                  if (!catOwned.length) return null;
                  return (
                    <div key={cat} style={{ marginBottom: 22 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>{CAT_LABELS[cat]}</div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 10 }}>
                        {catOwned.map(acc => {
                          const isEquipped = charEquipped[acc.category] === acc.id;
                          return (
                            <div key={acc.id} className="card-hover" onClick={() => toggleEquip(acc)}
                              style={{ background: isEquipped ? C.cream : "white", border: `3px solid ${isEquipped ? C.brownLight : C.border}`, borderRadius: 18, padding: "12px 10px", textAlign: "center", transition: "all 0.15s" }}>
                              <div style={{ height: 65, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
                                <img src={acc.img} alt={acc.name} style={{ maxHeight: 60, maxWidth: "90%", objectFit: "contain", borderRadius: acc.category === "bg" ? 6 : 0 }} />
                              </div>
                              <div style={{ fontWeight: 800, fontSize: 11, color: C.text }}>{acc.name}</div>
                              {isEquipped && <div style={{ marginTop: 5, fontSize: 10, fontWeight: 800, color: C.brown, background: C.border, borderRadius: 8, padding: "2px 8px", display: "inline-block" }}>ON ✓</div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
