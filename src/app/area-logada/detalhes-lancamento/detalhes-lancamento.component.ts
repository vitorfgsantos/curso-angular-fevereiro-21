import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-lancamento',
  templateUrl: './detalhes-lancamento.component.html',
  styleUrls: ['./detalhes-lancamento.component.scss']
})
export class DetalhesLancamentoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
