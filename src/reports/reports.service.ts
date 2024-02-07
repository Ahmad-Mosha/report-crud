import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entity/report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private reportRepository: Repository<Report>,
  ) {}

  async getAll() {
    return await this.reportRepository.find();
  }

  async create(report: CreateReportDto) {
    return await this.reportRepository.save(report);
  }

  async get(id: string) {
    return await this.reportRepository.findOne({ where: { id } });
  }

  async update(id: string, report: CreateReportDto) {
    return await this.reportRepository.update(id, report);
  }

  async delete(id: string) {
    return await this.reportRepository.delete(id);
  }
}
