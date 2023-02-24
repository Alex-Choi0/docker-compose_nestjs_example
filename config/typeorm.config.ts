import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// TypeORM과 DataBase를 연결하기 위한 셋팅
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // 데이터베이스 타입
  host: process.env.HOST, // 주소
  port: +process.env.PORT, // 데이터베이스 포스트
  username: process.env.USER, // 데이터베이스 소유자 이름
  password: process.env.PASSWORD, // 데이터베이스 비밀번호
  database: process.env.DATABASE, // 데이터베이스 이름
  autoLoadEntities: true, // 자동으로 entities를 DB에 배포
  synchronize: true, // 동기화
};
