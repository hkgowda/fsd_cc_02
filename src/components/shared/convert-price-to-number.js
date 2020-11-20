const ConvertPriceToNumber = price => {
  return (Number(price.replace('$', '')))
}

export default ConvertPriceToNumber