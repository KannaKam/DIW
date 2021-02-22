import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsDate'
})

export class NewsDatePipe implements PipeTransform {

  /**
   * custom pipe to format the publication date
   * @param value 
   * @param title 
   */
  transform(value: string, title: string): string {
    
    const myDate = new Date(value);

    return title + myDate.getDate() + "-" +myDate.getMonth() + "-" + myDate.getFullYear() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

  };

};
