export function maybeUtter(pressure) {
  if (pressure > 0.98) {
    return "…";
  }
  return null;
}
