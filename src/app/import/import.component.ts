import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  names ={};
  constructor(public ConfigService: ConfigService) { }

  ngOnInit(): void {
        this.ConfigService.getConfig().subscribe((data:{})=>{
          this.names = data
          console.log(data)
        })
  }
}
