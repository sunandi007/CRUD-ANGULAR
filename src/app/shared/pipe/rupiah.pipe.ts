import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {

  public transform(value: number | null | undefined): string {
    value = value && value > 0 ? value : 0;

    return 'Rp ' + Math.ceil(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

}
