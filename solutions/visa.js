const checkVisa = (cardno) => /^4\d{12,15}$/.test(cardno);

export default checkVisa;