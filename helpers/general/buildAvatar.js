export default biz =>
  biz?.avatar ? `${biz?.avatar.imageBaseUrl}/${biz?.avatar.imagePrefix}` : '';
