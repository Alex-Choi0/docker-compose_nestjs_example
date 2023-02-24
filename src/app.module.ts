import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { typeOrmConfig } from 'config/typeorm.config';
import { RedisClientOptions } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MemberModule,
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: process.env.REDIS_URL,
      isGlobal: true, // 모든 모듈에서 사용 가능하도록 설정
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
