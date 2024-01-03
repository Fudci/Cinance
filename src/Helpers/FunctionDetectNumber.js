export const NumberMore3 = (setphoneActive, valueForm) => {
  if (
    /^-?[0-9]+(?:\.[0-9]+)?$/.test(valueForm) &&
    /^[0-9]{3,100}$/.test(valueForm.replace(/[.-]/g, ''))
  ) {
    setphoneActive(true);
  } else {
    setphoneActive(false);
  }
};
