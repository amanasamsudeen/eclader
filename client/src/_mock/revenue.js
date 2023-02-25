import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  category: sample([
    'Mobile parts',
    'Computer parts',
    'Other'
  ]),
  revenue: sample(['5000','14560','500','4500','15000']),
  isVerified: faker.datatype.boolean(),
  cost: sample(['1000','5410','8000','1200']),
}));

export default users;
