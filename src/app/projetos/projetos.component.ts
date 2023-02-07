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

  showText(project: string){
    var display = document.getElementById(project)!.style.display;
    display == "none" ? document.getElementById(project)!.style.display = "block" : document.getElementById(project)!.style.display = "none";
  }

  expandImage(project:string){
    let imagem = document.getElementById(project)!.style;
    imagem.cssText = 'opacity: 100%; max-width: 1300px; height: 600px; object-fit: cover;margin-left: 1000px;'
    document.getElementById('olho')!.style.display = "none"
  }

  retractImage(project: string){
  let imagem = document.getElementById(project)!.style; 
  document.getElementById('olho')!.style.display = "block";
  
  imagem.cssText = 'align-items: center; max-width: 350px; height: 300px; opacity: 80%;'
  }

}
