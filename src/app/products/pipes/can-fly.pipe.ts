
import { Pipe, PipeTransform } from "@angular/core";


// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'canFly'
})
export class canFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Si vuela' : 'No vuela';
  }

}
