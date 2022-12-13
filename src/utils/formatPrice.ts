export function formatPrice(value: number) {
  return new Intl.NumberFormat('en', {
    currency: 'USD',
    style: 'currency'
  }).format(value)
}
