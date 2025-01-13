import { MockMethod } from 'vite-plugin-mock';
import { faker } from '@faker-js/faker';
import { LoginInfo } from '../src/models/user';

// const nameList = ['用牌玩命', '持名上网', '实名上网', 'Guinevere桂乃芬', '公司的狗'];

const generateMockData = (): LoginInfo => ({
  name: '用牌玩命',
  avatar: '/images/avatar-test.jpg',
  sex: 1,
  latestLoginAt: faker.date.between({ from: '2025-01-01', to: Date.now() })
});

const mockMethods: MockMethod[] = [
  {
    url: '/api/auth/login',
    method: 'get',
    timeout: 500,
    statusCode: 200,
    response: generateMockData()
  },
]

export default mockMethods;