import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private firestore: AngularFirestore) { }

  agregarViaje(viaje: any): Promise<any>{
    return this.firestore.collection('viajes').add(viaje);
  }

  getViajes(): Observable<any>{
    return this.firestore.collection('viajes', ref => ref.orderBy('fechaCreacion','asc')).stateChanges();
  }

  eliminarViaje( id: string): Promise<any>{
    return this.firestore.collection('viajes').doc(id).delete();
  }
  getViaje(id: string): Observable<any>{
      return this.firestore.collection('viajes').doc(id).snapshotChanges();
  }

  actualizarViaje(id: string, data:any): Promise<any>{
    return this.firestore.collection('viajes').doc(id).update(data);
  }
}
