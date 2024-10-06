import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  controlText(project: string){

    let elemento = document.querySelector("#" + project + '-text') as HTMLElement;
    console.log(elemento.style.display)
    if (elemento.style.display == "none"){
      document.getElementById(project + '-text')!.style.display = "block";
      document.getElementById('down-' + project)!.style.display = "none";
      document.getElementById('up-' + project)!.style.display = "block";
    }else{
      document.getElementById(project + '-text')!.style.display = "none";
      document.getElementById('up-' + project)!.style.display = "none";
      document.getElementById('down-' + project)!.style.display = "block";
    }

  }

}

