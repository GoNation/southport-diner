export default (imgID, data) => {
  if (!imgID || !data || !data.length) return null;
  const exactFind = data.find(img => img.poweredId === imgID);
  if (exactFind) return exactFind;
  const imgIdWords = imgID.toLowerCase().split('-');

  return data.find(img => {
    const poweredIdLower = img.poweredId.toLowerCase();
    const poweredIdWords = poweredIdLower.split('-');

    return (
      imgIdWords.some(word => poweredIdLower.includes(word)) ||
      poweredIdWords.some(word => imgID.toLowerCase().includes(word))
    );
  });
};
