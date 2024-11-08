export default (imageBaseUrl, imagePrefix, width = 2500) =>
  `${
    imageBaseUrl ? imageBaseUrl : 'https://res.cloudinary.com/gonation/'
  }/w_${width}/q_auto/f_auto/${imagePrefix}`;

// takes a two of the cloudinary strings and combines them into a URl structure.

// i.e imageBaseUrl = https://res.cloudinary.com/gonation

// i.e imagePrefix = gonation.data.prod/b2gonf2cfmjqnhhsfn0e

// returns https://res.cloudinary.com/gonation/gonation.data.prod/b2gonf2cfmjqnhhsfn0e
