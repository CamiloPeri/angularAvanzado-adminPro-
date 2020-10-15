import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css'],
})
export class AccoutSettingsComponent implements OnInit {


  constructor( public _settings:SettingsService) {}

  ngOnInit(): void {
    this._settings.checkCurrent();
  }

  cambiarColor(color: string) {
   this._settings.cambiarColor(color)
  }

}
