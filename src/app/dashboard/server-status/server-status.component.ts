import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

  currentStatus: 'offline' | 'online' | 'unknown' = 'online'; //Setting specific types in typescript :- Literal types

  constructor(){
  }

  private interval?: ReturnType<typeof setInterval>;

  ngOnInit(){
    this.interval = setInterval(() => {
      const rnd = Math.random(); //0 - 0.999
      if (rnd < 0.5 ){
        this.currentStatus = 'online';
      } else if(rnd < 0.9){
        this.currentStatus = 'offline';
      }
      else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    //If this component is removed while routing or its just closed before opening
    //another component, the setInterval keeps working in background causing memory leake
    //Hence, some parts of the application need to be destroyed in the this lifecycle hook
    clearTimeout(this.interval);
  }

}
