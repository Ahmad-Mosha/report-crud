import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateReportDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
