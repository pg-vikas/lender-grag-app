#!/bin/bash

FILES=$(find client/src/pages -name "*.tsx" ! -name "home.tsx" ! -name "clients.tsx")

for file in $FILES; do
  # Primary Buttons (Purple/Indigo) -> Cyan/Indigo combo
  sed -i 's/bg-\[#8b5cf6\]/bg-indigo-500/g' "$file"
  sed -i 's/hover:bg-\[#7c3aed\]/hover:bg-indigo-400/g' "$file"
  sed -i 's/text-\[#8b5cf6\]/text-indigo-400/g' "$file"
  sed -i 's/group-hover:text-\[#8b5cf6\]/group-hover:text-indigo-400/g' "$file"
  
  # Danger Buttons
  sed -i 's/text-\[#ef4444\]/text-rose-400/g' "$file"
  sed -i 's/bg-\[#ef4444\]/bg-rose-500/g' "$file"
  
  # Success Buttons
  sed -i 's/text-\[#10b981\]/text-emerald-400/g' "$file"
  
  # Icons
  sed -i 's/bg-\[#f3e8ff\]/bg-indigo-500\/10/g' "$file"
  sed -i 's/bg-\[#e0e7ff\]/bg-indigo-500\/10/g' "$file"
  
  # Focus rings
  sed -i 's/focus:ring-primary\/30/focus:ring-indigo-500\/50/g' "$file"
done

echo "Colors mapped to dark theme"
