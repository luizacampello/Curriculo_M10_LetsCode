import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {

  nome = "Luiza Motta Campello";

  ngOnInit(): void {

    const Typewriter = require('t-writer.js');

    const target = document.querySelector('.target');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
    });

    writer
      .changeTypeClass('teste')
      .type('geóloga')
      .rest(500)
      .remove(7)
      .type('programadora')
      .rest(500)
      .remove(12)
      .type('louca por gatinhos')
      .rest(500)
      .remove(18)
      .start()

  }
}
