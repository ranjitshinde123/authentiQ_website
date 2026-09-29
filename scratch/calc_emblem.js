const fs = require('fs');

// Generate SVG comparison with adjustable parameters
function generateSvg(cx, cy, Rout, T, botCutX, rightCutY, vOutX, vOutY, l1, l2) {
  const Rin = Rout - T;
  const perpOffset = T / Math.SQRT2; // ~0.7071 * T
  const vInY = vOutY - T * Math.SQRT2;

  // C-ring coordinates
  // Bottom vertical cut from (botCutX, cy + Rin_at_x) to (botCutX, cy + Rout_at_x)
  // Outer arc to (cx + Rout, rightCutY)
  // Horizontal cut to (cx + Rin_at_y, rightCutY)
  // Inner arc back to bottom
  
  // Calculate exact Y at botCutX
  const dxBot = botCutX - cx;
  const yBotOut = cy + Math.sqrt(Math.max(0, Rout * Rout - dxBot * dxBot));
  const yBotIn = cy + Math.sqrt(Math.max(0, Rin * Rin - dxBot * dxBot));

  // Calculate exact X at rightCutY
  const dyRight = rightCutY - cy;
  const xRightOut = cx + Math.sqrt(Math.max(0, Rout * Rout - dyRight * dyRight));
  const xRightIn = cx + Math.sqrt(Math.max(0, Rin * Rin - dyRight * dyRight));

  // Checkmark points
  const pOutLeft = { x: vOutX - l1, y: vOutY - l1 };
  const pInLeft = { x: pOutLeft.x + perpOffset, y: pOutLeft.y - perpOffset };
  const pInCorner = { x: vOutX, y: vInY };
  const pOutRight = { x: vOutX + l2, y: vOutY - l2 };
  const pInRight = { x: pOutRight.x - perpOffset, y: pOutRight.y - perpOffset };

  const cRingPath = `M ${botCutX} ${yBotIn.toFixed(1)} L ${botCutX} ${yBotOut.toFixed(1)} A ${Rout} ${Rout} 0 1 1 ${xRightOut.toFixed(1)} ${rightCutY} L ${xRightIn.toFixed(1)} ${rightCutY} A ${Rin} ${Rin} 0 1 0 ${botCutX} ${yBotIn.toFixed(1)} Z`;

  const checkPath = `M ${pOutLeft.x.toFixed(1)} ${pOutLeft.y.toFixed(1)} L ${vOutX} ${vOutY} L ${pOutRight.x.toFixed(1)} ${pOutRight.y.toFixed(1)} L ${pInRight.x.toFixed(1)} ${pInRight.y.toFixed(1)} L ${pInCorner.x.toFixed(1)} ${pInCorner.y.toFixed(1)} L ${pInLeft.x.toFixed(1)} ${pInLeft.y.toFixed(1)} Z`;

  return { cRingPath, checkPath };
}

const params = {
  cx: 72,
  cy: 64,
  Rout: 42,
  T: 13,
  botCutX: 72,
  rightCutY: 78,
  vOutX: 98,
  vOutY: 106,
  l1: 24,
  l2: 44
};

const paths = generateSvg(
  params.cx, params.cy, params.Rout, params.T,
  params.botCutX, params.rightCutY,
  params.vOutX, params.vOutY,
  params.l1, params.l2
);

console.log("C-Ring Path:", paths.cRingPath);
console.log("Check Path:", paths.checkPath);
