/**
 * Constructs a square 2D Array of given size.
 */
export function constructBoard(size = 3): null[][] {
  return Array.from({ length: size }, () => new Array(size).fill(null));
}