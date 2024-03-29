import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';

it('can create an instance of AuthService', async () => {
  const module = await Test.createTestingModule({
    providers: [AuthService],
  }).compile();
  const service = module.get(AuthService);
  expect(service).toBeDefined();
});
