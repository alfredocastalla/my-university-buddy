import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {

  @Get()
  getProfile() {
    return {
      name: "Alfredo A. Castalla",
      course: "BS Information Technology",
      year: "3rd Year",
      email: "acastalla@ssct.edu.ph"
    };
  }

}