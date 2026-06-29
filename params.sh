#!/bin/bash

while true
do

cat > public/api/ccms.json << EOF
{
  "rmpu1Mode": $((RANDOM % 10)),
  "rmpu2Mode": $((RANDOM % 10)),

  "airCo1": $((RANDOM % 2)),
  "airCo2": $((RANDOM % 2)),

  "blower1": $((RANDOM % 2)),
  "blower2": $((RANDOM % 2)),

  "blowerVfd1": $((RANDOM % 2)),
  "blowerVfd2": $((RANDOM % 2)),

  "compressor1_1": $((RANDOM % 2)),
  "compressor1_2": $((RANDOM % 2)),

  "compressor2_1": $((RANDOM % 2)),
  "compressor2_2": $((RANDOM % 2)),

  "compressorVfd1": $((RANDOM % 2)),
  "compressorVfd2": $((RANDOM % 2)),

  "condenserFan1_1": $((RANDOM % 2)),
  "condenserFan1_2": $((RANDOM % 2)),

  "controlPressure1": $((RANDOM % 2)),
  "controlPressure2": $((RANDOM % 2)),

  "freshAirDamper1_1": $((RANDOM % 2)),
  "freshAirDamper1_2": $((RANDOM % 2)),

  "freshAirDamper2_1": $((RANDOM % 2)),
  "freshAirDamper2_2": $((RANDOM % 2)),

  "uvLamp1": $((RANDOM % 2)),
  "uvLamp2": $((RANDOM % 2)),

  "returnDamper1_1": $((RANDOM % 2)),
  "returnDamper1_2": $((RANDOM % 2)),

  "heater1": $((RANDOM % 2)),
  "heater2": $((RANDOM % 2)),

  "hvacFault1": $((RANDOM % 2)),
  "hvacFault2": $((RANDOM % 2)),

  "rhActivation1": $((RANDOM % 2)),
  "rhActivation2": $((RANDOM % 2)),

  "internalTemp1": $((20 + RANDOM % 15)),
  "internalTemp2": $((20 + RANDOM % 15)),

  "ambientTemp1": $((30 + RANDOM % 15)),
  "ambientTemp2": $((30 + RANDOM % 15)),

  "diffPressure1": $((RANDOM % 2)),
  "diffPressure2": $((RANDOM % 2)),

  "lp1Pressure1": $((RANDOM % 2)),
  "lp1Pressure2": $((RANDOM % 2)),

  "lp2Pressure1": $((RANDOM % 2)),
  "lp2Pressure2": $((RANDOM % 2)),

  "hp1Pressure1": $((RANDOM % 2)),
  "hp1Pressure2": $((RANDOM % 2)),

  "hp2Pressure1": $((RANDOM % 2)),
  "hp2Pressure2": $((RANDOM % 2)),

  "ac400v1": $((RANDOM % 2)),
  "ac400v2": $((RANDOM % 2)),

  "cloggingFilter1": $((RANDOM % 2)),
  "cloggingFilter2": $((RANDOM % 2)),

  "setPoint1": $((18 + RANDOM % 10)),
  "setPoint2": $((18 + RANDOM % 10))
}
EOF

echo "Updated CCMS data $(date)"

sleep 5

done