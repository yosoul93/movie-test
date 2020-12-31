import { HttpHeaders } from '@angular/common/http';

export class HeaderUtils {

  public static appendAuthorizationHeader(): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    // FIXME: this is temporary, we should get access token from login and store it 
    httpHeaders.append('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjMzYTZjYWJjOGQwYzYyNTYwZWI2NzRiOTg0NGE1ZiIsInN1YiI6IjVmZTlkZGE0YzA0NDI5MDAzZmQ0N2ZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOIgsdDIhJyW6nEejCTx72APKItIUhdReHbOA-TVPNE")
    httpHeaders.append('Content-Type', "application/json;charset=utf-8")
    return httpHeaders;
  }

}
