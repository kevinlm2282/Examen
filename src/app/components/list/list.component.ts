import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ViajesService } from 'src/app/services/viajes.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  viajes: any[] = [];
  constructor(private _viajeService: ViajesService,private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.getViajes()
  }

  getViajes(){
    this._viajeService.getViajes().subscribe(data => {
      this.viajes = [];
      data.forEach((element:any) => {
        // console.log(element.payload.doc.data());
        this.viajes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.viajes);
    });
  }

  eliminarViaje(id: string){
    this._viajeService.eliminarViaje(id).then(()=>{
      console.log('Viaje eliminado');
      window.location.reload();
      this.toastr.error('El viaje fue eliminado con exito','Registro eliminado',{positionClass: 'toast-bottom-right'});
    }).catch(error => {
      console.log(error);
    })
  }
  // refresh(): void { window.location.reload(); }



}
