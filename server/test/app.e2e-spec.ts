import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/commits (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/commits')
      .expect(200);

    expect(Array.isArray(response.body)).toBeTruthy();

    response.body.forEach(commit => {
      expect(commit).toHaveProperty('sha');
      expect(commit).toHaveProperty('commit.author.name');
    });
  });

  afterAll(async () => {
    await app.close();
  });
});