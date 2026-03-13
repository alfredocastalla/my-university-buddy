import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  getCourses() {
    return [
      {
        code: "IT101",
        name: "Introduction to Information Technology",
        instructor: "Dr. Santos"
      },
      {
        code: "IT202",
        name: "Web Development",
        instructor: "Prof. Reyes"
      },
      {
        code: "IT303",
        name: "Database Systems",
        instructor: "Dr. Cruz"
      }
    ];
  }

}