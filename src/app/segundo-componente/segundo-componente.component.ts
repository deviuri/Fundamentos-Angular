import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Joao";
  dataNascimento = "2001-11-28";
  urlImg = "/assets/transferir.jpg"

  mostrardata() {
    alert(`A data de nascimento do Joao é ${this.dataNascimento}`)
  }
}
