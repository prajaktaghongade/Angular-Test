import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  public data:any;
  constructor(private mySer: DataService) { 
  
  }

  ngOnInit(): void {
    this.mySer.getData().subscribe((res:any)=>{
      this.data= res.data;
      console.log(this.data.data);
    })
    
  }
  userDetail(){
    console.log('userDetail');
  }


}

  

