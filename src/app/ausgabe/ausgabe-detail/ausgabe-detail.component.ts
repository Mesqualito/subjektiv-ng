import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAusgabe} from "../../shared/model/ausgabe.model";

@Component({
  selector: 'app-ausgabe-detail',
  templateUrl: './ausgabe-detail.component.html',
  styleUrls: ['./ausgabe-detail.component.scss']
})
export class AusgabeDetailComponent implements OnInit {

  ausgabe: IAusgabe;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ausgabe}) => {
      this.ausgabe = ausgabe;
    });
  }
}
