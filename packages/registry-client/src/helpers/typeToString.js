import types from '../organizationTypes';

export default function typeToString(type) {
  const typeData = types[Number(type)];
  return typeData ? typeData.name : '';
};

