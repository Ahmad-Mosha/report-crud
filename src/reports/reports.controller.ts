import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  create(@Body() report: CreateReportDto) {
    return this.reportsService.create(report);
  }

  @Get()
  getAll() {
    return this.reportsService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.reportsService.get(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() report: CreateReportDto) {
    return this.reportsService.update(id, report);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.reportsService.delete(id);
  }
}
