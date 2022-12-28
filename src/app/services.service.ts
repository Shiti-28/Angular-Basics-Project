import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Students } from './students.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http:HttpClient) { }

  Url:string= "http://localhost:3000";

  //view Data
  getAllData():Observable<Students[]>{
    return this.http.get<Students[]>(this.Url+"/getAllData");
  }

  //submit data
  postData(st:Students){
    //return this.http.post(`${this.Url}/stud`,Students)
    return this.http.post<Students>(this.Url+"/getAllData",st);
  }

  //delete data
  delete(id:number){
      return this.http.delete(this.Url+"/getAllData/"+id)
  }

  //edit data
  // edit(id:number){
  //   return this.http.put(this.Url/"getAllData"/+id);
  // }
}
