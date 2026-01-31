export function witnessVisual(input, time) {
  // Input is a factor, not a trigger
  const pressure = Math.sin(time) + input * 0.01;

  if (pressure > 0.95) {
    return { state: "manifesting" };
  }

  return { state: "latent" };
}
