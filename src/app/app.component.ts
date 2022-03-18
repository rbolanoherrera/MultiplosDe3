import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MultiplosDe3';
  mensaje:string="";
  numero:string="";
  archivo:any;
  fileReader = new FileReader();
  resultado:Array<string> = [];
  filesLines:Array<string> = [];

  guardar(forma:NgForm){

    // console.log('ngForm', forma);
    // console.log('numero', this.numero);

    // if(forma.valid)
    // {
    //   this.mensaje="";

    //   var num = Number.parseInt(this.numero)
    //   var residuo = num % 3;
      
    //   console.log('Residuo: ' + residuo);

    //   if(residuo == 0){
    //     console.log('Si es multiplo de 3');
    //     this.mensaje='Si es multiplo de 3';
    //   }
    //   else{
    //     console.log('No es multiplo');
    //     this.mensaje = 'No es multiplo';
    //   }

    // }
    // else{
    //   this.mensaje="Faltan campos por diligenciar";
    //   console.log('Formulario incompleto');
    // }


  }

  fileChanged(e:any) {

    //console.log(e)
    this.mensaje = "";

    this.archivo = e.target.files[0];

    this.fileReader.onload = (e) => { 
      console.log(this.fileReader.result);

      var lineas = this.fileReader.result?.toString().split('\n');
      this.validarMultiplode3(lineas);
    } 
    
    this.fileReader.readAsText(this.archivo);

  }

  validarMultiplode3(lineas:any){

    for(var linea of lineas) {

      //this.mensaje += linea;
      this.filesLines.push(linea);

      if(linea != null && linea.toString().length > 0)
      {
        var num = Number.parseInt(linea);
        var residuo = num % 3;

        if(residuo == 0){
          console.log("Si");
          //this.mensaje+="<div>Si</div>"
          this.resultado.push("Si");
        }
          else{
          console.log("No");
          //this.mensaje+="<div>No</div>"
          this.resultado.push("No");
          }
      }
      else
        console.log("NO");
    }

  }

  // onLoad() {

  //   console.log("reader", this.reader); // Obtienes el texto
  //   var result = this.reader.result; // Obtienes el texto
  //   // En tu ejemplo lo obtienes de una petición HTTP
    
  //   var lineas:any = result?.toString().split('\n');
    
    
  //   // o lineas.forEach(function(linea){ ... })
  //   // o lineas.find(function(linea){ return linea == contraseña })
  //   for(var linea of lineas) {
  //     console.log('[linea]', linea)
  //     //if(linea === passwordBuscar) {
  //       // Encontraste contraseña
  //     //}
  //   }
    
  // }

}
