import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teste'
})
export class TestePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
