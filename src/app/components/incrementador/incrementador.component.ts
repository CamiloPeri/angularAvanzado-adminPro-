import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input() valor: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number) {
    if (this.valor >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return (this.valor = 100);
    }
    if (this.valor <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return (this.valor = 0);
    }
    this.valor = this.valor + valor;
    this.valorSalida.emit(this.valor);
  }
  onChange(value: number) {
    if (value >= 100) {
      this.valor = 100;
    } else if (value <= 0) {
      this.valor = 0;
    } else {
      this.valor = value;
    }
    this.valorSalida.emit(this.valor);
  }
}
