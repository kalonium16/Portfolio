import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images2 = [
    '../../assets/weather1.png',
    '../../assets/weather2.png',
    '../../assets/weather3.png',
  ];

  ngOnInit(): void {}
}
