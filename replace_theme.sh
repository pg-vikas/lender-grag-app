#!/bin/bash

FILES=$(find client/src/pages -name "*.tsx" ! -name "home.tsx" ! -name "clients.tsx")

for file in $FILES; do
  # Replace text colors
  sed -i 's/text-\[#0f172a\]/text-white/g' "$file"
  sed -i 's/text-\[#1e293b\]/text-slate-200/g' "$file"
  sed -i 's/text-\[#475569\]/text-slate-300/g' "$file"
  sed -i 's/text-\[#64748b\]/text-slate-400/g' "$file"
  sed -i 's/text-\[#94a3b8\]/text-slate-500/g' "$file"

  # Replace backgrounds
  sed -i 's/bg-white\/80 backdrop-blur-md\/80 backdrop-blur-sm/bg-slate-900\/40 backdrop-blur-xl/g' "$file"
  sed -i 's/bg-white\/80 backdrop-blur-md/bg-slate-900\/40 backdrop-blur-xl/g' "$file"
  sed -i 's/bg-white\/90/bg-slate-900\/60/g' "$file"
  sed -i 's/bg-white/bg-slate-900\/50/g' "$file"
  sed -i 's/bg-\[#f8fafc\]/bg-slate-900\/80/g' "$file"
  sed -i 's/bg-\[#f1f5f9\]/bg-slate-800/g' "$file"
  
  # Replace borders
  sed -i 's/border-\[#e2e8f0\]\/80/border-white\/10/g' "$file"
  sed -i 's/border-\[#e2e8f0\]/border-white\/10/g' "$file"
  
  # Replace inputs and specific elements
  sed -i 's/modern-card/glass-panel rounded-2xl border-t border-indigo-500\/20/g' "$file"
done

# Additional cleanup for table elements
for file in $FILES; do
  sed -i 's/<thead className="bg-slate-900\/80">/<thead className="bg-slate-900\/80 text-slate-300 font-semibold border-b border-white\/10 uppercase tracking-wider text-\[11px\]">/g' "$file"
  sed -i 's/text-\[#0f172a\]/text-white/g' "$file"
done

echo "Theme replacement complete"
