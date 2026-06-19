#!/bin/bash

CSS_FILE="src/components/ExploreContainer.css"

cp "$CSS_FILE" "$CSS_FILE.bak"

cat >> "$CSS_FILE" << 'EOF'

/* ===========================
   LARGE TOUCH IMPROVEMENTS
   =========================== */

.coach {
    min-height: 65px !important;
    padding: 0.9rem !important;
    font-size: 24px !important;
    font-weight: bold !important;
}

.trainsList .TrainItem {
    min-height: 70px !important;
    padding: 1rem !important;
    font-size: 24px !important;
    font-weight: bold !important;
}

.LoginButton {
    min-height: 55px !important;
    padding: 0.8rem 1.2rem !important;
    font-size: 22px !important;
    font-weight: bold !important;
}

.heading-first .train-number,
.heading-first .title {
    min-height: 55px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    font-size: 22px !important;
    font-weight: bold !important;
}

.equipment-item {
    min-height: 70px !important;
    padding: 0.8rem !important;
}

.equipment-item .name {
    font-size: 20px !important;
    line-height: 1.3 !important;
}

.legendBtn {
    padding: 0.8rem 1rem !important;
    font-size: 22px !important;
    font-weight: bold !important;
}

button {
    min-height: 55px !important;
    font-size: 22px !important;
}

EOF

echo "✅ Large touch-friendly styles applied."
echo "📄 Backup saved as $CSS_FILE.bak"