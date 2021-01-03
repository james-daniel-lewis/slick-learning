const formatter = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

export default function formatMoney(pounds) {
  return formatter.format(pounds);
}
