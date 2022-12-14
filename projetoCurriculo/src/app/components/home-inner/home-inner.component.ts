import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {

  nome = "Luiza Motta Campello";

  public tWriterData!: Array<string>;

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {

    this.getTWriterArray();

    const Typewriter = require('t-writer.js');

    const target = document.querySelector('.target');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'none',
      cursorColor: 'none'
    });

    this.tWriterData.forEach(element => {
      writer
      .changeTypeClass('t-writer')
      .type(element)
      .rest(500)
      .remove(element.length)
      .start()
    });
  }

  getTWriterArray() {
    this.tWriterData = this.contentService.getTWriterArray();
  }
}
