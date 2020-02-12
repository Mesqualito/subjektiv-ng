import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Ausgabe} from "../../shared/services/ausgabe.service";

@Component({
  selector: 'app-ausgabe-detail',
  templateUrl: './ausgabe-detail.component.html',
  styleUrls: ['./ausgabe-detail.component.scss']
})
export class AusgabeDetailComponent implements OnInit {

  ausgabe: Ausgabe;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ausgabe}) => {
      this.ausgabe = ausgabe;
    });
  }
}
