import slugify from 'slugify';
export default str => (!str ? '' : slugify(str, { lower: true }));
