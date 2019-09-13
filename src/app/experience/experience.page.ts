import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  constructor(public route: ActivatedRoute) { }
  username: string;

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("name");
    if(this.username == "undefined")
    {
      this.username = "John Doe";
    }
    
  }

}
