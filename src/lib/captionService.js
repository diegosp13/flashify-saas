export async function generateCaption(productType) {
  return `🎉 ${productType} imperdível! 🎁 Frete grátis!\n#${productType.replace(/\s/g, '')} #promoção #compraragora`;
}
