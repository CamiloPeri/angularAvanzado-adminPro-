import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menu: any[];
  itemHijo: any;
  constructor(public _sidebaService: SidebarService) {}

  ngOnInit(): void {
    this.menu = this._sidebaService.menu;
  }
}
