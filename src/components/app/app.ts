import Vue from 'vue';
import Component from 'vue-class-component';

import { LayoutComponent } from 'components/layout';
import { SearchComponent } from 'components/search';
import { EditorComponent } from 'components/editor';
import { ConnectComponent } from 'components/connect';

@Component({
  template: require('./app.html'),
  components: {
    'layout': LayoutComponent,
    'search': SearchComponent,
    'editor': EditorComponent,
    'connect': ConnectComponent
  }
})
export class App extends Vue {

}
