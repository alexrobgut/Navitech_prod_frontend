import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { incidencia } from '../interface';
import {environment} from '../../environments/environments'

@Injectable({
    providedIn: 'root'
})

export class incidenciaServices{
    private endpoint:string=environment.endPoint;
    private apiUrl:string = this.endpoint+"/api/";
    private baseUrl = 'http://localhost:7047/api/IncidenciaControllers'; // Cambia e