import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './profile/profile.controller';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfileController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
