export const observerA = {
  next:     v =>   console.log('[A] Next:', v),
  error:    err => console.log('[A] Error:', err),
  complete: () =>  console.log('[A] Done'),
}

export const observerB = {
  next:     v =>   console.log('[B] Next:', v),
  error:    err => console.log('[B] Error:', err),
  complete: () =>  console.log('[B] Done'),
}

export const observerC = {
  next:     v =>   console.log('[C] Next:', v),
  error:    err => console.log('[C] Error:', err),
  complete: () =>  console.log('[C] Done'),
}

export const observerD = {
  next:     v =>   console.log('[D] Next:', v),
  error:    err => console.log('[D] Error:', err),
  complete: () =>  console.log('[D] Done'),
}

console.clear();
