import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario:string="Jadson";
  constructor() { }

  public somDoisNumeros(): void{
    alert(2+4);
  }

  ngOnInit() {
    this.somDoisNumeros();
  }

}
