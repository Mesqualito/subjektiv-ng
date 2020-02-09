import {Component, Input} from '@angular/core';
import {Ausgabe} from "../../shared/services/ausgabe.service";

@Component({
  selector: 'app-ausgabe-detail',
  templateUrl: './ausgabe-detail.component.html',
  styleUrls: ['./ausgabe-detail.component.scss']
})
export class AusgabeDetailComponent {

  @Input() ausgabe: Ausgabe;

}
