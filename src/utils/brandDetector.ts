export const brandDetector = (cardNumber: string) => {
  if (cardNumber.startsWith("5")) {
    return "mc";
  }
  if (cardNumber.startsWith("4")) {
    return "visa";
  }

  if (cardNumber.startsWith("3")) {
    return "amex";
  }

  return "cc";
};
