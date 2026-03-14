#!/bin/bash

FILES=$(find client/src/pages -name "*.tsx" ! -name "home.tsx" ! -name "clients.tsx")

for file in $FILES; do
  # Fix specific table header styles
  sed -i 's/<thead className="bg-slate-900\/80 text-slate-300 font-semibold border-b border-white\/10 uppercase tracking-wider text-\[11px\]">/<thead className="bg-slate-900\/80">/g' "$file"
  sed -i 's/<thead className="bg-slate-900\/80">/<thead className="bg-slate-900\/80">/g' "$file"
  
  # Replace bad classes in tr tags
  sed -i 's/border-\[#e2e8f0\]/border-white\/5/g' "$file"
  sed -i 's/bg-white/bg-transparent/g' "$file"

  # Badges
  sed -i 's/bg-transparent text-\[#10b981\] border-\[#10b981\]/bg-emerald-500\/10 text-emerald-400 border-emerald-500\/20/g' "$file"
  sed -i 's/bg-transparent text-\[#f59e0b\] border-\[#f59e0b\]/bg-amber-500\/10 text-amber-400 border-amber-500\/20/g' "$file"
  sed -i 's/bg-transparent text-\[#ef4444\] border-\[#ef4444\]/bg-rose-500\/10 text-rose-400 border-rose-500\/20/g' "$file"
  sed -i 's/bg-transparent text-\[#38bdf8\] border-\[#38bdf8\]/bg-cyan-500\/10 text-cyan-400 border-cyan-500\/20/g' "$file"
  sed -i 's/bg-transparent text-slate-500 border-slate-500/bg-slate-500\/10 text-slate-400 border-slate-500\/20/g' "$file"
done

echo "Badges and tables fixed"
