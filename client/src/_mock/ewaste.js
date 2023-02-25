import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const users=[{
  id: faker.datatype.uuid(),
  name:'CPU-Motherboard-008',
  isVerified:faker.datatype.boolean(),
  status: 'recyclable',
  category:'Computer Parts'
},
{
  id: faker.datatype.uuid(),
  name:'Mobile-holder-809',
  isVerified:faker.datatype.boolean(),
  status: 'reusable',
  category:'Mobile Parts'
},
{
  id: faker.datatype.uuid(),
  name:'Laptop-screen-004',
  isVerified:faker.datatype.boolean(),
  status: 'recyclable',
  category:'Computer Parts'
},
{
  id: faker.datatype.uuid(),
  name:'Bulb-004',
  isVerified:faker.datatype.boolean(),
  status: 'reusable',
  category:'Other'
},
{
  id: faker.datatype.uuid(),
  name:'Washingmachine-motor-780',
  isVerified:faker.datatype.boolean(),
  status: 'reusable',
  category:'Other'
},
{
  id: faker.datatype.uuid(),
  name:'Beater-handle-068',
  isVerified:faker.datatype.boolean(),
  status: 'recyclable',
  category:'Other'
}];

export default users;
