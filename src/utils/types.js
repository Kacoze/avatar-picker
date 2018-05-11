import propTypes from 'prop-types';

const AvatarShape = propTypes.shape({
  src: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
});

const AvatarListShape = propTypes.arrayOf(AvatarShape);

export { AvatarShape, AvatarListShape };
