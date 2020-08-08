import { Component, OnInit} from '@angular/core';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';

// const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
// console.log(allTodos);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    // allTodos()

  }

}
