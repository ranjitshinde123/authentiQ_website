function generateSvg(cx, cy, Rout, T, botCutX, rightCutY, vOutX, vOutY, l1, l2) {
  const Rin = Rout - T;
  const perpOffset = T / Math.SQRT2;
  const vInY = vOutY - T * Math.SQRT2;

  const dxBot = botCutX - cx;
  const yBotOut = cy + Math.sqrt(Math.max(0, Rout * Rout - dxBot * dxBot));
  const yBotIn = cy + Math.sqrt(Math.max(0, Rin * Rin - dxBot * dxBot));

  const dyRight = rightCutY - cy;
  const xRightOut = cx + Math.sqrt(Math.max(0, Rout * Rout - dyRight * dyRight));
  const xRightIn = cx + Math.sqrt(Math.max(0, Rin * Rin - dyRight * dyRight));

  const pOutLeft = { x: vOutX - l1, y: vOutY - l1 };
  const pInLeft = { x: pOutLeft.x + perpOffset, y: pOutLeft.y - perpOffset };
  const pInCorner = { x: vOutX, y: vInY };
  const pOutRight = { x: vOutX + l2, y: vOutY - l2 };
  const pInRight = { x: pOutRight.x - perpOffset, y: pOutRight.y - perpOffset };

  const cRingPath = `M ${botCutX} ${yBotIn.toFixed(1)} L ${botCutX} ${yBotOut.toFixed(1)} A ${Rout} ${Rout} 0 1 1 ${xRightOut.toFixed(1)} ${rightCutY} L ${xRightIn.toFixed(1)} ${rightCutY} A ${Rin} ${Rin} 0 1 0 ${botCutX} ${yBotIn.toFixed(1)} Z`;

  const checkPath = `M ${pOutLeft.x.toFixed(1)} ${pOutLeft.y.toFixed(1)} L ${vOutX} ${vOutY} L ${pOutRight.x.toFixed(1)} ${pOutRight.y.toFixed(1)} L ${pInRight.x.toFixed(1)} ${pInRight.y.toFixed(1)} L ${pInCorner.x.toFixed(1)} ${pInCorner.y.toFixed(1)} L ${pInLeft.x.toFixed(1)} ${pInLeft.y.toFixed(1)} Z`;

  return { cRingPath, checkPath };
}

const p = generateSvg(66, 60, 42, 13, 66, 76, 92, 102, 22, 44);
console.log("C-Ring:", p.cRingPath);
console.log("Check:", p.checkPath);
