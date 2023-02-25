import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  purchases: sample([100,800,500,150,10,12,35,48]),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
}));

export default users;
