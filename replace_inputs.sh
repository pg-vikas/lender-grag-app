#!/bin/bash

FILES=$(find client/src/pages -name "*.tsx" ! -name "home.tsx" ! -name "clients.tsx")

for file in $FILES; do
  # Fix inputs specifically
  sed -i 's/border-\[#e2e8f0\]/border-white\/10/g' "$file"
  sed -i 's/focus:border-indigo-500/focus:border-indigo-500\/50/g' "$file"
  sed -i 's/focus:ring-indigo-500/focus:ring-indigo-500\/50/g' "$file"
  
  # Ensure backgrounds for inputs/selects are correct
  sed -i 's/bg-slate-900\/50 border/bg-slate-900\/80 border/g' "$file"
  
  # Replace bad button backgrounds
  sed -i 's/bg-white\/80 backdrop-blur-md\/80/bg-slate-800 border border-slate-700/g' "$file"
  sed -i 's/bg-white/bg-slate-900/g' "$file"
  
  # Replace placeholder colors
  sed -i 's/placeholder:text-\[#94a3b8\]/placeholder:text-slate-500/g' "$file"
done

echo "Input replacements complete"
