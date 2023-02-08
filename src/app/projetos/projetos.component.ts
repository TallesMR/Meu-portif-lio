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
    var display = document.getElementById(project + '-text')!.style.display;
    if (display == "none"){
      document.getElementById(project + '-text')!.style.display = "block";
      document.getElementById('down-' + project)!.style.display = "none";
      document.getElementById('up-' + project)!.style.display = "block";
    }else{
      document.getElementById(project + '-text')!.style.display = "none";
      document.getElementById('up-' + project)!.style.display = "none";
      document.getElementById('down-' + project)!.style.display = "block";
    }
  }

  expandImage(project:string){
      let imagem = document.getElementById(project + '-img')!.style;
      imagem.cssText = 'opacity: 100%; max-width: 1300px; height: 600px;margin-left: 1000px;'
      document.getElementById(project + '-eye')!.style.display = "none";
    }
    
  retractImage(project: string){
    let imagem = document.getElementById(project + '-img')!.style; 
    imagem.cssText = 'align-items: center; max-width: 350px; height: 300px; opacity: 80%;'
    document.getElementById(project+'-eye')!.style.display = "block";
  } 
}

