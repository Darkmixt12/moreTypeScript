import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescript';

  constructor(){
     
    //!------------------------------------TYPE SCRIPT------------------------- //
    
    const a: number = 10;
    let b: number = 10;

    //?----------------------------------- BOOLEANOS------------------------------- // 

    let superman: boolean = true;
    let batman :  boolean = false;

    superman = (batman) ? true : false;

    console.log({ superman })


    //? -----------------------------------NUMERALES----------------------------- // 

    let avengers: number = 10;

    console.log( avengers)

    const villians: number = 20;

    if(avengers < villians) {
      console.log('estamos en problemas')

    } else {
      console.log('Nos salvamos')
    }

    avengers = Number('55A ')

    console.log(avengers)

    //?----------------------------------- STRINGS-------------------------------- //
    const abc = 123;
    const pikachu: string = 'Pikachu'
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Heroe: Volcan Negro`;

    console.log(pikachu.toUpperCase());
    console.log(` I'm ${ pikachu }, ${abc} `);

    console.log( pikachu[10]?.toUpperCase()|| 'No esta presente')

    //? --------------------------------- TIPO DE DATO ANY --------------------- //

    let avenger : any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange'

    console.log( (avenger as string).charAt(0) );

    avenger = 160.2334135;
    console.log( <number>avenger.toFixed(2));

    console.log(exists)
    console.log(power);

    //? -------------------------------- ARRAY ------------------------------------ //

    // const numbers: (string | number)[] = [1,2,3,4,5,'6',7,8,9,10];
    const number: number[] = [1,2,3,4,5,6,7,8,9,10];

    const villian = ['rojo', 'verde', 'amarillo']

    villian.forEach( v => {console.log( v.toLocaleUpperCase() )} )

    number.forEach( n => {console.log(n - 10)})


    //? ------------------------------- TUPLA ------------------------------------- //

    const hero: [string, number] = ['Dr Strange', 100] // Pareciera un array pero este solo acepta datos en el orden declarado primero un string y luego number

    hero[0] = 'Backman';
    hero[1] = 250;

    hero.push( 'Barakamon', 500 )
    console.log(hero)


    //? ------------------------------ ENUM ------------------------------------------ //

    enum AudioLevel {
        min,
        medium,
        max,
    }

  //   enum AudioLevel {
  //     min = 1,
  //     medium = 2,
  //     max = 35,
  // }

    const currentAudio = AudioLevel.min

    console.log( currentAudio )


    //? ------------------------------ VOID ------------------------------------------ //

      function callBatman():void {
        return;
      }

      const callSuperman = ():void => {
        return
      }

      //? ------------------------------ NEVER ------------------------------------------ //

      //const error = (message: string):never => { // usualmente este tipo de dato es para determinar funcionees que van a terminar con un error
      //    throw new Error(message)    
      //}

      //error('Auxilio');
      //console.log('Hola mundo')


      //? ------------------------------ NULL OR UNDEFINED ------------------------------------------ //

        //let nada : number = undefined;

        //console.log(nada)



//*------------------------------------------ FUNCIONES ---------------------------------------------*//
       

        
  }


  public hero2: string = 'Flash';                                    

  returnStream( ): string {

    return this.hero2;
  }

//* ------------------------------------------ PARAMETROS OBLIGATORIOS DE LAS FUNCIONES -------------------- //

  public fullName = (firstName: string, lastName: string): string => {


    return `${ firstName} ${lastName}`;
    
  }

  public name = this.fullName('Tony', 'Stark');
  
  
 //* ------------------------------------------ PARAMETROS REST -------------------- //

 
}
