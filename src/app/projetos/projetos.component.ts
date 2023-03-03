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

  expandImage(project:string, indice: number){
      let imagem = document.getElementById(project + '-img')!.style;
      imagem.cssText = 'opacity: 100%; max-width: 1000px; height: 400px;';
      switch (project) {
        case 'biosapiens':
          imagem.cssText = 'opacity: 100%; max-width: 1000px; height: 400px; margin-left: 500px';    
          document.getElementById('qeru')!.style.opacity = '0';
          break;
        case 'ballebot':
          imagem.cssText = 'opacity: 100%; max-width: 1000px; height: 400px; margin-right: 300px';
          break;
        case 'adolfo':
          document.getElementById('ballebot')!.style.opacity = '0';
        break;
        case 'qeru':
          document.getElementById('adolfo')!.style.opacity = '0';
        break;
      }
      document.getElementById(project + '-eye')!.style.display = "none";
    }
    
  retractImage(project: string){
      let imagem = document.getElementById(project + '-img')!.style;
      switch (project) {
        case 'biosapiens':
          document.getElementById('qeru')!.style.opacity = '80';
          break;
        case 'adolfo':
          document.getElementById('ballebot')!.style.opacity = '80';
        break;
        case 'qeru':
          document.getElementById('adolfo')!.style.opacity = '80';
        break;
      }
    imagem.cssText = 'align-items: center; max-width: 350px; height: 300px; opacity: 80%;'
    document.getElementById(project+'-eye')!.style.display = "block";
  } 
}

