import { Component, OnInit, ViewChild } from '@angular/core';

import {Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;
  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }
  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
