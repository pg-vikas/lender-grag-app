#!/bin/bash

FILES=$(find client/src/pages -name "*.tsx" ! -name "home.tsx" ! -name "clients.tsx")

for file in $FILES; do
  # Fix empty headers
  sed -i 's/<div className="flex justify-between items-center mb-6">/<div className="flex justify-between items-center mb-6">\n              <h2 className="text-xl font-bold text-white tracking-tight">/g' "$file"
  
  # Ensure standard font-sans usage
  sed -i 's/font-sans text-slate-200/font-sans text-slate-300/g' "$file"
done

echo "Final refinements complete"
