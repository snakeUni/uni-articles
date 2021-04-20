export function numDecodings(s: string): number {
  const n = s.length
  // a = f[i-2], b = f[i-1], c = f[i]
  let a = 0,
    b = 1,
    c = 0
  for (let i = 1; i <= n; ++i) {
    c = 0
    if (s[i - 1] !== '0') {
      c += b
    }
    if (
      i > 1 &&
      s[i - 2] != '0' &&
      ((s as any)[i - 2] - 0) * 10 + ((s as any)[i - 1] - 0) <= 26
    ) {
      c += a
    }
    a = b
    b = c
  }
  return c
}
