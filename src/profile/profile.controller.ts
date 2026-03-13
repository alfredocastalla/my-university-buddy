import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {

  @Get()
  getProfile() {
    return {
      name: "Juan Dela Cruz",
      course: "BS Information Technology",
      year: "3rd Year",
      email: "juan.delacruz@university.edu"
    };
  }

}