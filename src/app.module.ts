import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './modules/candidate/candidate.module';
import { ElectionModule } from './modules/election/election.module';
import { ElectionHistoryModule } from './modules/electionHistory/election.module';
import { NationalIdCardModule } from './modules/nationalIdCard/NationalIdCard.module';
import { UserModule } from './modules/user/user.module';
import { VoteModule } from './modules/vote/vote.module';
import { AuthModule } from './helpers/auth/auth.module';

@Module({
  imports: [
    CandidateModule,
    ElectionModule,
    ElectionHistoryModule,
    NationalIdCardModule,
    UserModule,
    VoteModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
