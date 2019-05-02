import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    },
  });

  strar: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.strar.push(this.lorem.generateParagraphs(1));
    }
  }

}
