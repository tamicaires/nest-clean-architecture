import { IsNotEmpty, IsString } from "class-validator";
import { FleetStatus } from "src/modules/fleet/enum/fleet-status.enum";

export class CreateFleetBody {

  @IsString()
  @IsNotEmpty()
  fleetNumber: string;
  
  @IsString()
  @IsNotEmpty()
  plate: string;

  @IsString()
  @IsNotEmpty()
  first_trailer_plate: string;

  @IsString()
  @IsNotEmpty()
  second_trailer_plate: string;

  @IsString()
  @IsNotEmpty()
  third_trailer_plate: string;

  @IsString()
  @IsNotEmpty()
  km: string;

  @IsString()
  @IsNotEmpty()
  carrierId: string;

  @IsString()
  @IsNotEmpty()
  status: FleetStatus;

}