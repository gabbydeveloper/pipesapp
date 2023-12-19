import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'gabby';
  public nameUpper: string = 'GABBY';
  public fullName: string = 'gAbbY zApAtta';

  public customDate: Date = new Date();

}
