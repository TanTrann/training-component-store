import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';

const state = {
  // Task box
  TASK_CONTROLS: [
    {
      title: 'To do',
      quantites: 10,
      tag: null,
      icon: 'articleIcon',
      color: '#FB8694',
    },
    {
      title: 'In progress',
      quantites: 10,
      tag: null,
      icon: 'clockIcon',
      color: '#FFCE5B',
    },
    {
      title: 'Done',
      quantites: 10,
      tag: 'today',
      icon: 'checkCircleIcon',
      color: '#58BA6E',
    },
    {
      title: 'Done',
      quantites: 10,
      tag: 'this week',
      icon: 'checkCircleIcon',
      color: '#58BA6E',
    },
    {
      title: 'Done',
      quantites: 10,
      tag: 'this month',
      icon: 'checkCircleIcon',
      color: '#58BA6E',
    },
  ],
  TASK_BOX_CONTENT: [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      date: '15 dez 2021',
      icons: ['accountCircleIcon'],
      description:
        'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      date: '15 dez 2021',
      icons: ['accountCircleIcon'],
      description:
        'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      date: '15 dez 2021',
      icons: ['accountCircleIcon'],
      description:
        'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.',
    },
  ],
  EVENT_CONTENT: [
    {
      date: '08/01 - 19:00 - 20:00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      date: '08/01 - 19:00 - 20:00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      date: '08/01 - 19:00 - 20:00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};
type State = typeof state;

@Injectable()
export class DashboardStore extends ComponentStore<State> {
  responsedata: any;

  constructor(private router: Router) {
    super(state);
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }
}
