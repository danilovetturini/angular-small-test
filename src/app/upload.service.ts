import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileUpload } from '../Model/ModelDTO';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public uploadfile(file: File) {
    const formData = new FormData();
    // optional you can pass a file name as third parameter
    formData.append('file', file, file.name)
    formData.append('IdTicket', '8')

    return this.httpClient.post('https://localhost:44354/api/shared/uploadfile', formData);
    }
}
