export const PriceUsd = price => {
  // console.log(price, 'price');
  if (price.includes('.0')) {
    const frontPrice = price.split('.0')[0];
    const backPrice = price.split('.0')[1];
    return `${frontPrice}.${backPrice.slice(0, 4)}`;
  } else {
    const frontPrice = price.split('.')[0];
    const backPrice = price.split('.')[1];
    return `${frontPrice}.${backPrice.slice(0, 2)}`;
  }
};

export const PriceUsdSingle = price => {
  console.log(typeof price);
  // return price;
  if (price.includes('.0')) {
    const frontPrice = price.split('.0')[0];
    const backPrice = price.split('.0')[1];
    return `${frontPrice}.${backPrice.slice(0, 4)}`;
  } else {
    const frontPrice = price.split('.')[0];
    const backPrice = price.split('.')[1];
    return `${frontPrice}.${backPrice.slice(0, 2)}`;
  }
};

export default {PriceUsd, PriceUsdSingle};
