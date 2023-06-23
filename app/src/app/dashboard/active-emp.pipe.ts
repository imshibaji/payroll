import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeEmp'
})
export class ActiveEmpPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.filter(item => item.isActive == 1);
  }

}
