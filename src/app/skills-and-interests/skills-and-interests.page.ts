import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-and-interests',
  templateUrl: './skills-and-interests.page.html',
  styleUrls: ['./skills-and-interests.page.scss'],
})
export class SkillsAndInterestsPage implements OnInit {

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
