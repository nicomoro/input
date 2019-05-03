import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer;

  constructor() { }

  ngOnInit() {
    this.developer = new Developer('Nicolas', 'Moreau', 36, 'Homme', 'Ma bio',
    [
      new Skill ('Name', 'Logo', 'Site'),
      new Skill ('JS', 'Javascript', 'Angular'),
      new Skill ('CSS', 'HTML', 'Node.js'),
    ]);
  }

}
