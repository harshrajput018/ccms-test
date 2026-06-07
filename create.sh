#!/bin/bash

mkdir -p public

cat > public/users.csv << 'EOF'
username,password
admin,admin123
harsh,harsh123
test,test123
EOF

npm install papaparse

echo "users.csv created successfully."
echo "Dependency papaparse installed."