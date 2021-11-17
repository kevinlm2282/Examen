import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-create-viajes',
  templateUrl: './create-viajes.component.html',
  styleUrls: ['./create-viajes.component.css']
})
export class CreateViajesComponent implements OnInit {

  createViajes: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Viaje';
  constructor(private fb: FormBuilder, private _viajeService: ViajesService, 
    private router: Router,private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createViajes = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      destino: ['', Validators.required],
      paquete: ['', Validators.required],
      origen: ['', Validators.required],
      costo: ['', Validators.required],
      hotel: ['', Validators.required],
      

    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarViaje(){
  this.submitted = true;

  if (this.createViajes.invalid) {
    return;
  }

  if (this.id === null) {
    this.agregarViaje();
  }else{
    this.editarViaje(this.id);
  }
  
  }


  agregarViaje(){
    const empleado: any = {
      nombre: this.createViajes.value.nombre,
      apellido: this.createViajes.value.apellido,
      destino: this.createViajes.value.destino,
      paquete: this.createViajes.value.paquete,
      origen: this.createViajes.value.origen,
      costo: this.createViajes.value.costo,
      hotel: this.createViajes.value.hotel,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
  
    this.loading = true;
      this._viajeService.agregarViaje(empleado).then(()=> {
        this.toastr.success('Se registro con exito', 'Viaje registrado', {positionClass: 'toast-bottom-right'});
        this.loading = false;
        this.router.navigate(['/list']);
      }).catch(error => {
        console.log(error);
        this.loading = false;
      })
  }

  editarViaje(id: string){
    const empleado: any = {
      nombre: this.createViajes.value.nombre,
      apellido: this.createViajes.value.apellido,
      destino: this.createViajes.value.destino,
      paquete: this.createViajes.value.paquete,
      origen: this.createViajes.value.origen,
      costo: this.createViajes.value.costo,
      hotel: this.createViajes.value.hotel,
      fechaActualizacion: new Date()
    }
    this.loading =true;
    this._viajeService.actualizarViaje(id, empleado).then(() => {
      this.loading = false;
      this.toastr.info('El Viaje fue modificado con exito','Viaje modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list']);
    });
  }

  esEditar(){
    this.titulo='Editar Viaje';
    if (this.id !== null) {
      this.loading = true;
      this._viajeService.getViaje(this.id).subscribe(data =>{
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.createViajes.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          destino: data.payload.data()['destino'],
          paquete: data.payload.data()['paquete'],
          origen: data.payload.data()['origen'],
          costo: data.payload.data()['costo'],
          hotel: data.payload.data()['hotel'],
          
        })
      })
    }
  }
}
